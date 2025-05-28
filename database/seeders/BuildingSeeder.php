<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Building;

class BuildingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $buildings = [
            [
                'name' => 'Complexul Rezidențial Primăverii',
                'description' => 'Complex modern cu 4 blocuri, 120 apartamente, spații verzi amenajate și facilități premium pentru locuitori.',
                'address' => 'Str. Primăverii nr. 15, Sector 1, București',
                'image' => '/storage/buildings/primaverii.jpg'
            ],
            [
                'name' => 'Ansamblul Floreasca Gardens',
                'description' => 'Ansamblu exclusivist cu facilități premium și sistem de securitate 24/7, în zona Floreasca.',
                'address' => 'Bd. Floreasca nr. 89, Sector 1, București',
                'image' => '/storage/buildings/floreasca.jpg'
            ],
            [
                'name' => 'Rezidențial Herastrău Park',
                'description' => 'Dezvoltare rezidențială cu vedere la parc, 80 unități locative și amenajări moderne.',
                'address' => 'Șos. Nordului nr. 45, Sector 1, București',
                'image' => '/storage/buildings/herastrau.jpg'
            ],
            [
                'name' => 'Blocul Universității',
                'description' => 'Imobil istoric renovat, situat în centrul Bucureștiului, cu 50 de apartamente.',
                'address' => 'Bd. Regina Elisabeta nr. 12, Sector 3, București',
                'image' => '/storage/buildings/universitate.jpg'
            ],
            [
                'name' => 'Complexul Aviatorilor',
                'description' => 'Complex rezidențial modern cu 6 blocuri, parcare subterană și spații comerciale.',
                'address' => 'Bd. Aviatorilor nr. 78, Sector 1, București',
                'image' => '/storage/buildings/aviatorilor.jpg'
            ]
        ];

        foreach ($buildings as $building) {
            Building::create($building);
        }
    }
}
