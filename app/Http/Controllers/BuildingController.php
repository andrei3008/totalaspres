<?php

namespace App\Http\Controllers;

use App\Models\Building;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BuildingController extends Controller
{
    public function index()
    {
        // În loc să folosim Building::all() care cauzează probleme cu DB,
        // vom folosi date hardcodate pentru a afișa pagina
        $buildings = [
            [
                'id' => 1,
                'name' => 'Complexul Rezidențial Green Park',
                'address' => 'Strada Florilor 15, Sector 1, București',
                'description' => 'Complex modern cu 4 blocuri, 200 de apartamente și spații verzi amenajate. Facilități premium: parcare subterană, spa, sală fitness.',
                'image' => 'https://picsum.photos/id/1031/400/300',
                'apartments' => 200,
                'year' => 2019,
                'rating' => 4.9,
                'features' => ['Parcare subterană', 'Spații verzi', 'Securitate 24/7']
            ],
            [
                'id' => 2,
                'name' => 'Ansamblul Aurora',
                'address' => 'Bulevardul Unirii 45, Sector 3, București',
                'description' => 'Ansamblul mixt de birouri și locuințe în centrul orașului cu acces facil la transportul public și zona comercială.',
                'image' => 'https://picsum.photos/id/1040/400/300',
                'apartments' => 150,
                'year' => 2020,
                'rating' => 4.8,
                'features' => ['Centrul orașului', 'Transport public', 'Zone comerciale']
            ],
            [
                'id' => 3,
                'name' => 'Cartierul Soarelui',
                'address' => 'Strada Soarelui 8-12, Cluj-Napoca',
                'description' => 'Complex rezidențial cu facilitați moderne, parcare subterană și zone de recreere pentru copii și adulți.',
                'image' => 'https://picsum.photos/id/1048/400/300',
                'apartments' => 120,
                'year' => 2021,
                'rating' => 4.7,
                'features' => ['Zone recreere', 'Parcare subterană', 'Aproape de școli']
            ],
            [
                'id' => 4,
                'name' => 'Rezidența Belvedere',
                'address' => 'Strada Belvedere 22, Brașov',
                'description' => 'Dezvoltare premium cu vedere la munte, finisaje de lux și facilitați exclusive pentru rezidenți.',
                'image' => 'https://picsum.photos/id/164/400/300',
                'apartments' => 80,
                'year' => 2022,
                'rating' => 5.0,
                'features' => ['Vedere la munte', 'Finisaje premium', 'Concierge service']
            ],
            [
                'id' => 5,
                'name' => 'Complex Titanium',
                'address' => 'Calea Victoriei 156, Sector 1, București',
                'description' => 'Clădire de birouri clasa A cu tehnologii smart building și certificare de sustenabilitate.',
                'image' => 'https://picsum.photos/id/260/400/300',
                'apartments' => 300,
                'year' => 2018,
                'rating' => 4.6,
                'features' => ['Smart building', 'Certificare verde', 'Locație premium']
            ],
            [
                'id' => 6,
                'name' => 'Villa Gardens',
                'address' => 'Strada Primăverii 5-9, Constanța',
                'description' => 'Complex exclusivist de vile cu gradini private, aproape de plajă și cu facilitați resort-style.',
                'image' => 'https://picsum.photos/id/856/400/300',
                'apartments' => 45,
                'year' => 2023,
                'rating' => 4.9,
                'features' => ['Gradini private', 'Aproape de plajă', 'Facilitați resort']
            ]
        ];
        
        return Inertia::render('Portfolio', [
            'buildings' => $buildings
        ]);
    }

    public function show(Building $building)
    {
        return Inertia::render('BuildingDetail', [
            'building' => $building
        ]);
    }
}
