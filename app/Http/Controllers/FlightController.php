<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class FlightController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    //     $response = Http::withBody(
    //         '{
    //   "query": {
    //     "market": "BD",
    //     "locale": "en-GB",
    //     "currency": "BDT",
    //     "adults": "1",
    //     "cabinClass": "CABIN_CLASS_ECONOMY",
    //     "queryLegs": [
    //       {
    //         "originPlaceId": {
    //           "iata": "DAC"
    //         },
    //         "destinationPlaceId": {
    //           "iata": "SPD"
    //         },
    //         "date": {
    //           "year":  2023,
    //           "month": 11,
    //           "day": 26
    //         }
    //       }
    //     ]
    //   }
    // }',
    //         'json'
    //     )
    //         ->withHeaders([
    //             'Accept' => '*/*',
    //             'Content-Type' => 'application/json',
    //             'x-api-key' => 'sh428739766321522266746152871799',
    //         ])
    //         ->post('https://partners.api.skyscanner.net/apiservices/v3/flights/live/search/create');


    //     $searchResponse = $response->body();

    //     $sessionID = json_decode($searchResponse)->sessionToken;

    //     $pollResponse = Http::withHeaders([
    //         'Accept' => '*/*',
    //         'Content-Type' => 'application/json',
    //         'x-api-key' => 'sh428739766321522266746152871799',
    //     ])
    //         ->post('https://partners.api.skyscanner.net/apiservices/v3/flights/live/search/poll/' . $sessionID);


    //     return Inertia::render('Home', [
    //         'response' => json_decode($pollResponse->body())
    //     ]);
    return Inertia::render('Home');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // $tokenResponse = Http::withHeader('Content-Type', 'application/x-www-form-urlencoded')
        //     ->asForm()
        //     ->post('https://test.api.amadeus.com/v1/security/oauth2/token', ['grant_type' => 'client_credentials', 'client_id' => env('FLIGHT_API_KEY'), 'client_secret' => env('FLIGHT_API_SECRET')]);

        // $accessToken =  json_decode($tokenResponse->body())->access_token;

        // dd($accessToken);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
