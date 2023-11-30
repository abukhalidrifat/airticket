<?php

use App\Http\Controllers\FlightController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [FlightController::class,'index'])->name('home');

Route::get('/api',[FlightController::class, 'store']);

Route::get('/flight/search', function () {
    return Inertia::render('AvailableFlights');
})->name('availableFlights');

Route::get('/flight/review', function () {
    return Inertia::render('ReviewFlight');
})->name('reviewFlight');

Route::get('/airline/{airlinename}', function (string $airlinename) {
    return Inertia::render('Airline',[
        'airline' => $airlinename
    ]);
})->name('airline');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
