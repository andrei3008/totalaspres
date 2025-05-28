<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BuildingController;
use App\Http\Controllers\DocumentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PageController::class, 'home'])->name('home');

// Test route pentru debugging React
Route::get('/test', function () {
    return Inertia::render('Test');
})->name('test');

Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/services', [PageController::class, 'services'])->name('services');
Route::get('/portfolio', [BuildingController::class, 'index'])->name('portfolio');
Route::get('/buildings/{building}', [BuildingController::class, 'show'])->name('buildings.show');
Route::get('/documents', [DocumentController::class, 'index'])->name('documents');
Route::get('/documents/{document}/download', [DocumentController::class, 'download'])->name('documents.download');
Route::get('/contact', [PageController::class, 'contact'])->name('contact');
Route::post('/contact', [PageController::class, 'contactSubmit'])->name('contact.submit');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // User dashboard pages
    Route::get('/reports', function () {
        return Inertia::render('Reports');
    })->name('reports');
    
    Route::get('/payments', function () {
        return Inertia::render('Payments');
    })->name('payments');
    
    Route::post('/payments/process', function () {
        // This would integrate with a real payment processor
        return back()->with('success', 'Plata a fost procesată cu succes!');
    })->name('payments.process');
    
    Route::get('/notifications', function () {
        return Inertia::render('Notifications');
    })->name('notifications');
});

require __DIR__.'/auth.php';
