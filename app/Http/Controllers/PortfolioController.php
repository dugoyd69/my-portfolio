<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Skill;
use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    public function index(): Response
    {
        $featured = Project::with('technologies:id,name,domain')
            ->where('featured', true)
            ->orderBy('display_order')
            ->latest('created_at')
            ->get();

        // Fall back to the latest few so the homepage is never empty before any
        // projects have been marked as featured in the admin.
        if ($featured->isEmpty()) {
            $featured = Project::with('technologies:id,name,domain')
                ->latest('created_at')
                ->take(6)
                ->get();
        }

        return Inertia::render('portfolio/index', [
            'skills' => Skill::with('technologies:id,name,domain')
                ->orderBy('display_order')
                ->get(),
            'projects' => $featured,
            'projectCount' => Project::count(),
        ]);
    }

    public function show(Project $project): Response
    {
        $project->load(['technologies:id,name,domain', 'images']);

        return Inertia::render('portfolio/project-detail', [
            'project' => $project,
            'otherProjects' => Project::whereKeyNot($project->id)
                ->inRandomOrder()
                ->take(3)
                ->get(['id', 'title', 'description', 'image_url']),
        ]);
    }
}
