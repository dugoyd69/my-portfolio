<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('technologies', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('name');
            $table->string('domain')->nullable();
            $table->string('icon_url')->nullable();
            $table->timestamps();
        });

        Schema::create('skills', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->text('description');
            $table->string('icon_name')->default('Code2');
            $table->integer('display_order')->default(0);
            $table->timestamps();
        });

        Schema::create('projects', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->text('description');
            $table->string('image_url');
            $table->string('icon_name')->default('Code2');
            $table->string('github_url')->nullable();
            $table->string('live_url')->nullable();
            $table->timestamps();
        });

        Schema::create('project_images', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('project_id')->constrained('projects')->cascadeOnDelete();
            $table->string('image_url');
            $table->timestamps();
        });

        Schema::create('skill_technologies', function (Blueprint $table) {
            $table->foreignUuid('skill_id')->constrained('skills')->cascadeOnDelete();
            $table->foreignUuid('technology_id')->constrained('technologies')->cascadeOnDelete();
            $table->primary(['skill_id', 'technology_id']);
        });

        Schema::create('project_technologies', function (Blueprint $table) {
            $table->foreignUuid('project_id')->constrained('projects')->cascadeOnDelete();
            $table->foreignUuid('technology_id')->constrained('technologies')->cascadeOnDelete();
            $table->primary(['project_id', 'technology_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('project_technologies');
        Schema::dropIfExists('skill_technologies');
        Schema::dropIfExists('project_images');
        Schema::dropIfExists('projects');
        Schema::dropIfExists('skills');
        Schema::dropIfExists('technologies');
    }
};
