<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Technology extends Model
{
    use HasUuids;

    protected $fillable = ['name', 'domain', 'icon_url'];

    public function skills(): BelongsToMany
    {
        return $this->belongsToMany(Skill::class, 'skill_technologies');
    }

    public function projects(): BelongsToMany
    {
        return $this->belongsToMany(Project::class, 'project_technologies');
    }
}
