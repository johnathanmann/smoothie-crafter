import "../styles/generator.css";
import React from "react";
import produceJson from "../assets/json/produce.json"
import specialJson from "../assets/json/special.json"
import liquidJson from "../assets/json/liquid.json"
import {icons} from "../assets/icons"

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
    let liquid = (liquidJson);
    liquid = _.shuffle(liquidJson);
    liquid = liquid.slice(7);
    console.log(liquid)
    var measurment;
    console.log(produceAmount)
    if(produceAmount == 9){
        measurment = 4
    }
    if(produceAmount == 10){
        measurment = 3
    }
    if(produceAmount == 11){
        measurment = 2
    }
    console.log(measurment)
    console.log(icons)
    return(
        <div>
            {produce.map((e, index)=>{
            return <div><h1>1/{measurment} cups {produce[index].name}</h1>
            <img src={icons[produce[index].name]} alt="fruit"/></div>
            })}
            {special.map((e, index)=>{
            return <div><h1>{special[index].name}</h1>
            <img src={icons[special[index].img]} alt="fruit"/></div>
            })}
            <h1>1 cup ice</h1>
            <h1>1 cup {liquid[0].name}</h1>
        </div>
    )
}