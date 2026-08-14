<?php

use App\Models\Project;
use App\Models\Skill;
use App\Models\Technology;
use App\Models\User;

use function Pest\Laravel\actingAs;

function makeProject(array $attrs = []): Project
{
    return Project::create(array_merge([
        'title' => 'Sample Project',
        'description' => 'A description',
        'image_url' => '/img/portfolio/sample.png',
        'icon_name' => 'Code2',
    ], $attrs));
}

test('the public home page renders with skills and projects', function () {
    $tech = Technology::create(['name' => 'Laravel']);
    $skill = Skill::create([
        'title' => 'Development',
        'description' => 'Full-stack',
        'icon_name' => 'Code2',
        'display_order' => 1,
    ]);
    $skill->technologies()->attach($tech);
    $project = makeProject();
    $project->technologies()->attach($tech);

    $this->get('/')
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('portfolio/index')
            ->has('skills', 1)
            ->has('projects', 1)
        );
});

test('the home page shows only featured projects when some exist', function () {
    makeProject(['title' => 'Not Featured', 'featured' => false]);
    makeProject(['title' => 'Featured One', 'featured' => true, 'display_order' => 1]);

    $this->get('/')
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->has('projects', 1)
            ->where('projects.0.title', 'Featured One')
        );
});

test('an admin can toggle a project as featured', function () {
    actingAs(User::factory()->create());
    $project = makeProject(['featured' => false]);

    $this->patch(route('admin.projects.featured', $project))->assertRedirect();
    expect($project->fresh()->featured)->toBeTrue();

    $this->patch(route('admin.projects.featured', $project))->assertRedirect();
    expect($project->fresh()->featured)->toBeFalse();
});

test('a project detail page renders', function () {
    $project = makeProject();

    $this->get(route('project.show', $project))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('portfolio/project-detail'));
});

test('admin routes require authentication', function () {
    $this->get(route('admin.projects.index'))->assertRedirect(route('login'));
    $this->get(route('admin.skills.index'))->assertRedirect(route('login'));
    $this->get(route('admin.technologies.index'))->assertRedirect(route('login'));
});

test('an admin can view every management page', function () {
    actingAs(User::factory()->create());

    $this->get(route('admin.dashboard'))->assertOk();
    $this->get(route('admin.projects.index'))->assertOk();
    $this->get(route('admin.skills.index'))->assertOk();
    $this->get(route('admin.technologies.index'))->assertOk();
});

test('an admin can create a project with technologies and gallery images', function () {
    actingAs(User::factory()->create());

    $this->post(route('admin.projects.store'), [
        'title' => 'New Project',
        'description' => 'Built with Laravel',
        'image_url' => '/img/portfolio/new.png',
        'icon_name' => 'Code2',
        'github_url' => null,
        'live_url' => null,
        'technologies' => ['Laravel', 'React'],
        'gallery_images' => ['/img/portfolio/g1.png', ''],
    ])->assertRedirect();

    $project = Project::firstWhere('title', 'New Project');
    expect($project)->not->toBeNull();
    expect($project->technologies)->toHaveCount(2);
    expect($project->images)->toHaveCount(1); // empty gallery url filtered out
    expect(Technology::count())->toBe(2); // created on the fly
});

test('creating a project reuses existing technologies case-insensitively', function () {
    actingAs(User::factory()->create());
    Technology::create(['name' => 'Laravel']);

    $this->post(route('admin.projects.store'), [
        'title' => 'Another',
        'description' => 'x',
        'image_url' => '/img/x.png',
        'icon_name' => 'Code2',
        'technologies' => ['laravel'],
        'gallery_images' => [],
    ])->assertRedirect();

    expect(Technology::count())->toBe(1);
});

test('an admin can delete a project', function () {
    actingAs(User::factory()->create());
    $project = makeProject();

    $this->delete(route('admin.projects.destroy', $project))->assertRedirect();

    expect(Project::find($project->id))->toBeNull();
});
