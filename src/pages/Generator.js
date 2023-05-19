import "../styles/generator.css";
import "../styles/styles.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { RoughNotation } from "react-rough-notation";
import produceJson from "../assets/json/produce.json";
import specialJson from "../assets/json/special.json";
import liquidJson from "../assets/json/liquid.json";
import {icons} from "../assets/icons";
import ice from "../assets/imgs/ice.PNG";
import smoothie from "../assets/imgs/smoothie.PNG";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var _ = require('lodash');

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
var colors;
console.log(produceAmount)
if(produceAmount == 9){
    measurment = 4
    colors = [produce[0].color, produce[0].color, produce[0].color, produce[1].color, produce[2].color, produce[3].color]
}
if(produceAmount == 10){
    measurment = 3
    colors = [produce[0].color, produce[0].color, produce[0].color, produce[1].color, produce[2].color]
}
if(produceAmount == 11){
    measurment = 2
    colors = [produce[0].color, produce[0].color, produce[1].color]
}

console.log(measurment)
console.log(colors)

function regenerate() {
    window.location.reload();
}

export default function Generator(){
    const styles = {
        background: "linear-gradient("+ colors +")"
    }
    return(
        <Container id="generator">
            <Row>
        <NavLink to="/"><h1><RoughNotation strokeWidth="2"  type="underline" color="#000" animate="true"show="true" >Smoothie Generator</RoughNotation></h1></NavLink>
        </Row>
            <Row>
                <Col md={6} lg={4} sm={12} className="ingredients">
                <div className="ingredient">
                    <img src={ice} alt="Ice icon" />
                <h2>1 cup ice</h2>
                </div>
                {produce.map((e, index)=>{
                return <div className="ingredient pl-4">
                    <img src={icons[produce[index].name]} alt={produce[index].alt}/>
                    <h2>1/{measurment} cups {produce[index].name}</h2>
                    </div>
                })}
                </Col>
                <Col md={6} lg={4} sm={12} className="ingredients pl-4">
                <div className="ingredient">
                <img src={icons[liquid[0].img]} alt={liquid[0].alt}/>
                <h2>1 cup {liquid[0].name}</h2>
                </div>
                {special.map((e, index)=>{
                return <div className="ingredient">
                    <img src={icons[special[index].img]} alt={special[index].alt}/>
                    <h2>{special[index].name}</h2>
                    </div>
                })}
                </Col>
                <Col lg={4} sm={12} id="smoothie" className="text-center">
                    <img style={styles} src={smoothie} className="img-fluid"/>
                </Col>
            </Row>
            <Row className="text-center"><button onClick={() => regenerate()}><RoughNotation strokeWidth="2"  type="circle" color="#000" animate="true"show="true" padding={15}><h1>Regenerate</h1></RoughNotation></button></Row>
        </Container>
    )
}