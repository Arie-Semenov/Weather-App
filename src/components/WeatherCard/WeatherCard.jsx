import React from "react";
import { useState } from "react";
import './WeatherCard.css'

export default function WeatherCard(props){
    return(
        <div className="WeatherCard">
            <h2>{props.place}</h2>
            <h1>{props.weather}</h1>
        </div>
    );
}