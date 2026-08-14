<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Skill extends Model
{
    use HasUuids;

    protected $fillable = ['title', 'description', 'category', 'icon_name', 'display_order'];

    protected $casts = [
        'display_order' => 'integer',
    ];

    public function technologies(): BelongsToMany
    {
        return $this->belongsToMany(Technology::class, 'skill_technologies');
    }
}
