import React, {useState} from "react";
import {apppi} from "../api";


const Weather = () => {


    const description = apppi();
    console.log(description)


    return (
        <div>{description.description}</div>
    )
}

export default Weather;