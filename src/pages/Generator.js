import "../styles/generator.css";
import React from "react";
import produceJson from "../assets/json/produce.json"
import specialJson from "../assets/json/special.json"
import acai from "../assets/imgs/acai.PNG"
import apple from "../assets/imgs/apple.PNG"
import avocado from "../assets/imgs/avocado.PNG"
import banana from "../assets/imgs/banana.PNG"
import blueberry from "../assets/imgs/blueberry.PNG"
import chia from "../assets/imgs/chia.PNG"
import cinnamon from "../assets/imgs/cinnamon.PNG"
import cocoa from "../assets/imgs/cocoa.PNG"
import ginger from "../assets/imgs/ginger.PNG"
import kale from "../assets/imgs/kale.PNG"
import mango from "../assets/imgs/mango.PNG"
import matcha from "../assets/imgs/matcha.PNG"
import mint from "../assets/imgs/mint.PNG"
import oats from "../assets/imgs/oats.PNG"
import peach from "../assets/imgs/peach.PNG"
import peanut from "../assets/imgs/peanut.PNG"
import pineapple from "../assets/imgs/pineapple.PNG"
import raspberry from "../assets/imgs/raspberry.PNG"
import spinich from "../assets/imgs/spinich.PNG"
import strawberry from "../assets/imgs/strawberry.PNG"
import vinegar from "../assets/imgs/vinegar.PNG"
import watermelon from "../assets/imgs/watermelon.PNG"

let icons = {acai, apple, avocado, banana, blueberry, chia,cinnamon, cocoa, ginger, kale, mango, matcha, mint, oats, peach, peanut, pineapple, raspberry, spinich, strawberry, vinegar, watermelon}

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
        </div>
    )
}