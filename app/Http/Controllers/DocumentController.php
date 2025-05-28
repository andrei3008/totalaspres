<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DocumentController extends Controller
{
    public function index()
    {
        $documents = Document::all()->groupBy('category');
        
        return Inertia::render('Documents', [
            'documents' => $documents
        ]);
    }

    public function download(Document $document)
    {
        // In a real application, you would download the actual file
        // For now, we'll just return the document info
        return response()->download(storage_path('app' . $document->file_path));
    }
}
