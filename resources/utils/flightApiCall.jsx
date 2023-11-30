let API_KEY = "sh428739766321522266746152871799";

let createURL = "";

let url =
    "https://partners.api.skyscanner.net/apiservices/v3/autosuggest/flights";

export async function flightApiCalling() {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "x-api-key": API_KEY,
        },
    });

    return response.json();
}
