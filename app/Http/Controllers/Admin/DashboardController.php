<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Technology;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('admin/dashboard', [
            'stats' => [
                'projects' => Project::count(),
                'skills' => Skill::count(),
                'technologies' => Technology::count(),
            ],
            'recentProjects' => Project::latest('created_at')
                ->take(5)
                ->get(['id', 'title', 'image_url', 'created_at']),
        ]);
    }
}
