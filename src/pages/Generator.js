import "../styles/generator.css";
import React from "react";
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
        <Container id="generator">
            <Row>
                <Col className="ingredients">
                <div className="ingredient">
                    <img src={ice} alt="Ice icon" />
                <h2>1 cup ice</h2>
                </div>
                {produce.map((e, index)=>{
                return <div className="ingredient">
                    <img src={icons[produce[index].name]} alt={produce[index].alt}/>
                    <h2>1/{measurment} cups {produce[index].name}</h2>
                    </div>
                })}
                </Col>
                <Col className="ingredients">
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
                <Col>
                    <img src={smoothie}/>
                </Col>
            </Row>
        </Container>
    )
}