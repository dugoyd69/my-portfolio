<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\SkillController;
use App\Http\Controllers\Admin\TechnologyController;
use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PortfolioController::class, 'index'])->name('home');
Route::get('/project/{project}', [PortfolioController::class, 'show'])->name('project.show');

Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

    Route::post('projects', [ProjectController::class, 'store'])->name('projects.store');
    Route::patch('projects/{project}/featured', [ProjectController::class, 'toggleFeatured'])->name('projects.featured');
    Route::put('projects/{project}', [ProjectController::class, 'update'])->name('projects.update');
    Route::delete('projects/{project}', [ProjectController::class, 'destroy'])->name('projects.destroy');
    Route::get('projects', [ProjectController::class, 'index'])->name('projects.index');

    Route::post('skills', [SkillController::class, 'store'])->name('skills.store');
    Route::put('skills/{skill}', [SkillController::class, 'update'])->name('skills.update');
    Route::delete('skills/{skill}', [SkillController::class, 'destroy'])->name('skills.destroy');
    Route::get('skills', [SkillController::class, 'index'])->name('skills.index');

    Route::post('technologies', [TechnologyController::class, 'store'])->name('technologies.store');
    Route::put('technologies/{technology}', [TechnologyController::class, 'update'])->name('technologies.update');
    Route::delete('technologies/{technology}', [TechnologyController::class, 'destroy'])->name('technologies.destroy');
    Route::get('technologies', [TechnologyController::class, 'index'])->name('technologies.index');
});

require __DIR__.'/settings.php';
