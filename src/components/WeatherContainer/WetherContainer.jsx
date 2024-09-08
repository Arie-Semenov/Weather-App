import React, { useEffect, useState } from "react";
import './WeatherContainer.css';
import WeatherCard from "../WeatherCard/WeatherCard";

export default function WeatherContainer() {
    const [place, setPlace] = useState("");  // The place to search for
    const [inputValue, setInputValue] = useState("");  // To store the user input
    const [weather, setWeather] = useState(null);  // To store the temperature

    useEffect(() => {
        if (!place) return; // Exit if no place is set

        // Replace with your correct API key
        const apiKey = "6bd562307834b2ca3d71dbe659d43a21"; 
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}&units=metric`;

        fetch(url, { method: 'GET' })
            .then(response => {
                if (response.status === 401) {
                    throw new Error("Unauthorized - Invalid API key.");
                }
                return response.json();
            })
            .then(data => {
                if (data.cod === 200) {
                    setWeather(data.main.temp);
                } else {
                    setWeather(null)
                    console.error("Error:", data.message); 
                }
            })
            .catch(error => {
                console.error("Error fetching weather:", error);
            });
    }, [place]); 

    function handleInput(event) {
        setInputValue(event.target.value);
    }

    function handleSearch() {
        setPlace(inputValue);
    }

    return (
        <div className="container">
            <div className="Header-container">
                <input type="text" placeholder="Enter a Country/City" value={inputValue} onChange={handleInput} />
                <button onClick={handleSearch}>Search</button>
                <WeatherCard place={place} weather={weather} />
            </div>
        </div>
    );
}
