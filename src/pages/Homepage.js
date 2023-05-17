import { useNavigate } from "react-router-dom";
import React from "react";
import $ from 'jquery'; 
import { RoughNotation } from "react-rough-notation";
import "../styles/styles.css";
import "../styles/homepage.css";

export default function Homepage(){
    const navigate = useNavigate();

    function handleProduce(e, b, c1, c2) {
      localStorage.setItem("produceNumber", e );
      document.getElementById(c1).classList.remove("select");
      document.getElementById(c2).classList.remove("select");
      document.getElementById(b).classList.add("select");
    }
    function handleSpecial(e, b, c1, c2) {
      localStorage.setItem("specialNumber", e );
      document.getElementById(c1).classList.remove("select");
      document.getElementById(c2).classList.remove("select");
      document.getElementById(b).classList.add("select");
    }

    const handleSubmit = (e) => {
        navigate('/generator')
      }
    return(
      <div className="container center" id="homepage">
          <main>
          <h4>Fruit Amount:</h4>
           <button onClick={() => handleProduce(11, "b1", "b2", "b3")}> <RoughNotation strokeWidth="2"  type="circle" animate="true"show="true" padding="10" ><span className="number-btn " id="b1" >2</span></RoughNotation></button>
           <button onClick={() => handleProduce(10, "b2", "b1", "b3")}> <RoughNotation strokeWidth="2"  type="circle" color="#000" animate="true"show="true" padding="10"><span className="number-btn " id="b2">3</span></RoughNotation></button>
           <button onClick={() => handleProduce(9, "b3", "b1", "b2")}> <RoughNotation strokeWidth="2"  type="circle" color="#000" animate="true"show="true" padding="10"><span className="number-btn " id="b3">4</span></RoughNotation></button>
            <br />
            <h4>Special Ingredients:</h4>
            <button onClick={() => handleSpecial(7, "b4", "b5", "b6")}> <RoughNotation strokeWidth="2"  type="circle" color="#000" animate="true"show="true" padding="10" ><span className="number-btn" id="b4" >2</span></RoughNotation></button>
            <button onClick={() => handleSpecial(6, "b5", "b4", "b6")}> <RoughNotation strokeWidth="2"  type="circle" color="#000" animate="true"show="true" padding="10" ><span className="number-btn" id="b5" >3</span></RoughNotation></button>
            <button onClick={() => handleSpecial(5, "b6", "b4","b5" )}> <RoughNotation strokeWidth="2"  type="circle" color="#000" animate="true"show="true" padding="10" ><span className="number-btn" id="b6" >4</span></RoughNotation></button>
            <br/>
            <RoughNotation strokeWidth="2"  type="underline" color="#000" animate="true"show="true" ><button onClick={handleSubmit} id="generator"><h5>Generate</h5></button></RoughNotation>
          </main>
        </div>
    )
}
