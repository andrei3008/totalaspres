<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Document;

class DocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $documents = [
            [
                'title' => 'Regulament de Organizare și Funcționare',
                'description' => 'Document oficial care stabilește regulile de funcționare pentru asociațiile de proprietari.',
                'file_path' => '/storage/documents/regulament-organizare-functionare.pdf',
                'category' => 'reglementari'
            ],
            [
                'title' => 'Model Contract Administrare',
                'description' => 'Model standard de contract pentru serviciile de administrare imobiliare.',
                'file_path' => '/storage/documents/model-contract-administrare.pdf',
                'category' => 'contracte'
            ],
            [
                'title' => 'Ghid Întreținere Instalații',
                'description' => 'Ghid complet pentru întreținerea și mentenanța instalațiilor din imobile.',
                'file_path' => '/storage/documents/ghid-intretinere-instalatii.pdf',
                'category' => 'ghiduri'
            ],
            [
                'title' => 'Declarație pe Propria Răspundere',
                'description' => 'Model de declarație pe propria răspundere pentru diverse proceduri administrative.',
                'file_path' => '/storage/documents/declaratie-propria-raspundere.docx',
                'category' => 'formulare'
            ],
            [
                'title' => 'Lista Taxe și Costuri 2024',
                'description' => 'Lista actualizată cu toate taxele și costurile pentru serviciile de administrare.',
                'file_path' => '/storage/documents/lista-taxe-costuri-2024.xlsx',
                'category' => 'financiar'
            ],
            [
                'title' => 'Procedură Avarie Urgentă',
                'description' => 'Procedura de urmat în cazul avarii urgente în imobile.',
                'file_path' => '/storage/documents/procedura-avarie-urgenta.pdf',
                'category' => 'proceduri'
            ],
            [
                'title' => 'Model Proces Verbal Adunare Generală',
                'description' => 'Model de proces verbal pentru adunările generale ale asociațiilor de proprietari.',
                'file_path' => '/storage/documents/model-proces-verbal-adunare.docx',
                'category' => 'formulare'
            ],
            [
                'title' => 'Ghid Eficiență Energetică',
                'description' => 'Ghid pentru îmbunătățirea eficienței energetice în blocurilor de apartamente.',
                'file_path' => '/storage/documents/ghid-eficienta-energetica.pdf',
                'category' => 'ghiduri'
            ]
        ];

        foreach ($documents as $document) {
            Document::create($document);
        }
    }
}
