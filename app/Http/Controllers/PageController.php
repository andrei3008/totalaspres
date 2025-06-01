<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        return Inertia::render('Home');
    }

    public function about()
    {
        return Inertia::render('About');
    }

    public function services()
    {
        return Inertia::render('Services');
    }

    public function documents()
    {
        $documents = Document::all();
        return Inertia::render('Documents', [
            'documents' => $documents
        ]);
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }

    public function contactSubmit(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'subject' => 'required|string|max:255',
            'message' => 'required|string'
        ]);

        // Here you would typically send an email or save to database
        // For now, we'll just return a success message
        
        return back()->with('success', 'Mesajul dumneavoastră a fost trimis cu succes! Vă vom contacta în cel mai scurt timp.');
    }
}
