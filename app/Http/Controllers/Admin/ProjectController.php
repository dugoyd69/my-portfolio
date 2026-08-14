<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Technology;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/projects', [
            'projects' => Project::with(['technologies:id,name,domain', 'images'])
                ->latest('created_at')
                ->get(),
            'allTechnologies' => Technology::orderBy('name')->get(['id', 'name', 'domain']),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request);
        $project = Project::create($data['project']);
        $project->technologies()->sync($this->resolveTechnologyIds($data['technologies']));
        $this->syncImages($project, $data['gallery_images']);

        return back()->with('success', 'Project created.');
    }

    public function update(Request $request, Project $project): RedirectResponse
    {
        $data = $this->validated($request);
        $project->update($data['project']);
        $project->technologies()->sync($this->resolveTechnologyIds($data['technologies']));
        $this->syncImages($project, $data['gallery_images']);

        return back()->with('success', 'Project updated.');
    }

    public function destroy(Project $project): RedirectResponse
    {
        $project->delete();

        return back()->with('success', 'Project deleted.');
    }

    public function toggleFeatured(Project $project): RedirectResponse
    {
        $project->update(['featured' => ! $project->featured]);

        return back()->with('success', $project->featured ? 'Project featured on homepage.' : 'Project removed from homepage.');
    }

    /**
     * @return array{project: array<string, mixed>, technologies: array<int, string>, gallery_images: array<int, string>}
     */
    private function validated(Request $request): array
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'image_url' => ['required', 'string', 'max:2048'],
            'icon_name' => ['required', 'string', 'max:255'],
            'github_url' => ['nullable', 'string', 'max:2048'],
            'live_url' => ['nullable', 'string', 'max:2048'],
            'featured' => ['boolean'],
            'display_order' => ['nullable', 'integer', 'min:0'],
            'highlights' => ['nullable', 'string', 'max:5000'],
            'technologies' => ['array'],
            'technologies.*' => ['string', 'max:255'],
            'gallery_images' => ['array'],
            'gallery_images.*' => ['nullable', 'string', 'max:2048'],
        ]);

        return [
            'project' => [
                'title' => $validated['title'],
                'description' => $validated['description'],
                'image_url' => $validated['image_url'],
                'icon_name' => $validated['icon_name'],
                'github_url' => $validated['github_url'] ?? null,
                'live_url' => $validated['live_url'] ?? null,
                'featured' => $validated['featured'] ?? false,
                'display_order' => $validated['display_order'] ?? 0,
                'highlights' => $validated['highlights'] ?? null,
            ],
            'technologies' => $validated['technologies'] ?? [],
            'gallery_images' => array_values(array_filter(
                $validated['gallery_images'] ?? [],
                fn ($url) => is_string($url) && trim($url) !== '',
            )),
        ];
    }

    /**
     * Resolve technology names to ids, creating any that do not yet exist.
     *
     * @param  array<int, string>  $names
     * @return array<int, string>
     */
    private function resolveTechnologyIds(array $names): array
    {
        $ids = [];

        foreach ($names as $name) {
            $name = trim($name);
            if ($name === '') {
                continue;
            }
            $tech = Technology::whereRaw('LOWER(name) = ?', [mb_strtolower($name)])->first()
                ?? Technology::create(['name' => $name]);
            $ids[] = $tech->id;
        }

        return array_values(array_unique($ids));
    }

    /**
     * @param  array<int, string>  $urls
     */
    private function syncImages(Project $project, array $urls): void
    {
        DB::transaction(function () use ($project, $urls) {
            $project->images()->delete();
            foreach ($urls as $url) {
                $project->images()->create(['image_url' => $url]);
            }
        });
    }
}
