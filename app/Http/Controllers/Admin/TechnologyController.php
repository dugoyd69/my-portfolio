<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Technology;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class TechnologyController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/technologies', [
            'technologies' => Technology::withCount(['skills', 'projects'])
                ->orderBy('name')
                ->get(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        Technology::create($this->validated($request));

        return back()->with('success', 'Technology created.');
    }

    public function update(Request $request, Technology $technology): RedirectResponse
    {
        $technology->update($this->validated($request, $technology));

        return back()->with('success', 'Technology updated.');
    }

    public function destroy(Technology $technology): RedirectResponse
    {
        $technology->delete();

        return back()->with('success', 'Technology deleted.');
    }

    /**
     * @return array<string, mixed>
     */
    private function validated(Request $request, ?Technology $technology = null): array
    {
        return $request->validate([
            'name' => [
                'required', 'string', 'max:255',
                Rule::unique('technologies', 'name')->ignore($technology?->id),
            ],
            'domain' => ['nullable', 'string', 'max:255'],
            'icon_url' => ['nullable', 'string', 'max:2048'],
        ]);
    }
}
