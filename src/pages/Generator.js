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
    let measurment;
    if(produceAmount == 9){
        measurment = 4
    }
    if(produceAmount == 8){
        measurment = 3
    }
    if(produceAmount == 7){
        measurment = 2
    }
    console.log(measurment)
    return(
        <div>
            {produce.map((e, index)=>{
            return <h1>1/{measurment} cups {produce[index].name}</h1>
            })}
            {special.map((e, index)=>{
            return <h1>{special[index].name}</h1>
            })}
        </div>
    )
}