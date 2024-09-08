import React from "react";
import { useState } from "react";
import './WeatherContainer.css'

export default function WeatherContainer(props){
    const [place , setPlace] = useState("")
    
    function handleInput(event){
        setPlace(event.target.value)
    }

    function handleSearch(){
        console.log(place)
    }

    return(
        <div className="container">
            <div onChange={handleInput} className="Header-container">
                <input type="text" placeholder="Enter a Country/City" />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
}