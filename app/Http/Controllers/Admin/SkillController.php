<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Skill;
use App\Models\Technology;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SkillController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/skills', [
            'skills' => Skill::with('technologies:id,name,domain')
                ->orderBy('display_order')
                ->get(),
            'allTechnologies' => Technology::orderBy('name')->get(['id', 'name', 'domain']),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        [$attributes, $technologies] = $this->validated($request);
        $skill = Skill::create($attributes);
        $skill->technologies()->sync($this->resolveTechnologyIds($technologies));

        return back()->with('success', 'Skill created.');
    }

    public function update(Request $request, Skill $skill): RedirectResponse
    {
        [$attributes, $technologies] = $this->validated($request);
        $skill->update($attributes);
        $skill->technologies()->sync($this->resolveTechnologyIds($technologies));

        return back()->with('success', 'Skill updated.');
    }

    public function destroy(Skill $skill): RedirectResponse
    {
        $skill->delete();

        return back()->with('success', 'Skill deleted.');
    }

    /**
     * @return array{0: array<string, mixed>, 1: array<int, string>}
     */
    private function validated(Request $request): array
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'category' => ['nullable', 'string', 'max:255'],
            'icon_name' => ['required', 'string', 'max:255'],
            'display_order' => ['required', 'integer', 'min:0'],
            'technologies' => ['array'],
            'technologies.*' => ['string', 'max:255'],
        ]);

        return [
            [
                'title' => $validated['title'],
                'description' => $validated['description'],
                'category' => $validated['category'] ?? null,
                'icon_name' => $validated['icon_name'],
                'display_order' => $validated['display_order'],
            ],
            $validated['technologies'] ?? [],
        ];
    }

    /**
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
}
