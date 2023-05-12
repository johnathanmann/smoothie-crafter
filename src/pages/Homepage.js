import { useNavigate } from "react-router-dom";
import React from "react";
import $ from 'jquery'; 
import { RoughNotation } from "react-rough-notation";
import "../styles/styles.css";
import "../styles/homepage.css";

export default function Homepage(){
    const navigate = useNavigate();

    function handleProduce(e) {
      localStorage.setItem("produceNumber", e );
      document.getElementById(e).style.backgroundColor="red";
    }
    function handleSpecial(e) {
      localStorage.setItem("specialNumber", e );
    }

    const handleSubmit = (e) => {
        navigate('/generator')
      }
    return(
      <div className="container center">
          <div>
           <button onClick={() => handleProduce(11)}> <RoughNotation strokeWidth="2"  type="circle" color="#000" animate="true"show="true" padding="10" ><span className="number-btn" id="11" >2</span></RoughNotation></button>
           <button onClick={() => handleProduce(10)}> <RoughNotation strokeWidth="2"  type="circle" color="#000" animate="true"show="true" padding="10"><span className="number-btn" id="10">3</span></RoughNotation></button>
           <button onClick={() => handleProduce(9)}> <RoughNotation strokeWidth="2"  type="circle" color="#000" animate="true"show="true" padding="10"><span className="number-btn" id="9">4</span></RoughNotation></button>
            <br />
            <button onClick={() => handleSpecial(7)}> <RoughNotation strokeWidth="2"  type="circle" color="#000" animate="true"show="true" padding="10" ><span className="number-btn" id="7" >2</span></RoughNotation></button>
            <button onClick={() => handleSpecial(8)}> <RoughNotation strokeWidth="2"  type="circle" color="#000" animate="true"show="true" padding="10" ><span className="number-btn" id="8" >3</span></RoughNotation></button>
            <button onClick={() => handleSpecial(9)}> <RoughNotation strokeWidth="2"  type="circle" color="#000" animate="true"show="true" padding="10" ><span className="number-btn" id="9" >4</span></RoughNotation></button>
            <br/>
            <button onClick={handleSubmit}>Go</button>
          </div>
        </div>
    )
}
