import "../styles/generator.css";
import React from "react";
import produceJson from "../assets/json/produce.json"
import specialJson from "../assets/json/special.json"
var _ = require('lodash');

export default function Generator(){
    const produceAmount = localStorage.getItem("produceNumber");
    let produce = (produceJson);
    produce = _.shuffle(produceJson);
    produce = produce.slice(produceAmount);
    const specialAmount = localStorage.getItem("specialNumber");
    let special = (specialJson);
    special = _.shuffle(specialJson);
    special = special.slice(specialAmount);
    console.log(special)
    return(
        <div>
            {produce.map((e, index)=>{
            return <h1>{produce[index].name}</h1>
            })}
            {special.map((e, index)=>{
            return <h1>{special[index].name}</h1>
            })}
        </div>
    )
}