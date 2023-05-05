import "../styles/generator.css";
import React from "react";

export default function Generator(){
    const fruit = localStorage.getItem("fruitNumber")
    return(
        <div>
            <h1>{fruit}</h1>
        </div>
    )
}