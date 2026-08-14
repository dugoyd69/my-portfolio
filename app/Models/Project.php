<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    use HasUuids;

    protected $fillable = [
        'title', 'description', 'image_url', 'icon_name', 'github_url', 'live_url',
        'featured', 'display_order', 'highlights',
    ];

    protected $casts = [
        'featured' => 'boolean',
        'display_order' => 'integer',
    ];

    public function technologies(): BelongsToMany
    {
        return $this->belongsToMany(Technology::class, 'project_technologies');
    }

    public function images(): HasMany
    {
        return $this->hasMany(ProjectImage::class);
    }
}
