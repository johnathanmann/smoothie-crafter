import { useNavigate } from "react-router-dom";
import React from "react";
import $ from 'jquery'; 
import { RoughNotation } from "react-rough-notation";
import "../styles/styles.css";
import "../styles/homepage.css";

export default function Homepage(){
    const navigate = useNavigate();

    function handleProduce(e, c1, c2) {
      localStorage.setItem("produceNumber", e );
      document.getElementById(c1).classList.remove("active");
      document.getElementById(c2).classList.remove("active");
      document.getElementById(e).classList.add("active");
    }
    function handleSpecial(e, c1, c2) {
      localStorage.setItem("specialNumber", e );
      document.getElementById(c1).classList.remove("active");
      document.getElementById(c2).classList.remove("active");
      document.getElementById(e).classList.add("active");
    }

    const handleSubmit = (e) => {
        navigate('/generator')
      }
    return(
      <div className="container center">
          <main>
           <button onClick={() => handleProduce(11, 10, 9)}> <RoughNotation strokeWidth="2"  type="circle" animate="true"show="true" padding="10" ><span className="number-btn " id="11" >2</span></RoughNotation></button>
           <button onClick={() => handleProduce(10, 11, 9)}> <RoughNotation strokeWidth="2"  type="circle" color="#000" animate="true"show="true" padding="10"><span className="number-btn " id="10">3</span></RoughNotation></button>
           <button onClick={() => handleProduce(9, 10, 11)}> <RoughNotation strokeWidth="2"  type="circle" color="#000" animate="true"show="true" padding="10"><span className="number-btn " id="9">4</span></RoughNotation></button>
            <br />
            <button onClick={() => handleSpecial(7, 8, 0)}> <RoughNotation strokeWidth="2"  type="circle" color="#000" animate="true"show="true" padding="10" ><span className="number-btn" id="7" >2</span></RoughNotation></button>
            <button onClick={() => handleSpecial(8, 7, 0)}> <RoughNotation strokeWidth="2"  type="circle" color="#000" animate="true"show="true" padding="10" ><span className="number-btn" id="8" >3</span></RoughNotation></button>
            <button onClick={() => handleSpecial(0, 8, 7)}> <RoughNotation strokeWidth="2"  type="circle" color="#000" animate="true"show="true" padding="10" ><span className="number-btn" id="0" >4</span></RoughNotation></button>
            <br/>
            <button onClick={handleSubmit}>Go</button>
          </main>
        </div>
    )
}
