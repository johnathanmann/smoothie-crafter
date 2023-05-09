import "../styles/generator.css";
import React from "react";
import produceJson from "../assets/json/produce.json"
var _ = require('lodash');

export default function Generator(){
    const produceAmount = localStorage.getItem("produceNumber");
    let produce = (produceJson);
    produce = _.shuffle(produceJson);
    produce = produce.slice(produceAmount);
    console.log(produce)
    return(
        <div>
            <h1></h1>
        </div>
    )
}