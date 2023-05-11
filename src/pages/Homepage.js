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
    }
    function handleSpecial(e) {
      localStorage.setItem("specialNumber", e );
    }

    const handleSubmit = (e) => {
        navigate('/generator')
      }
      $('.button').click(function() {
        $('.temp-wrapper').append('<div class="temp"><div class="icon-del"></div><div>new content</div></div>');
      });
    return(
      <div className="container center">
          <div>
            <RoughNotation strokeWidth="2"  type="circle" color="#000" animate="true"show="true" margin="10px"><button onClick={() => handleProduce(11)}>2</button></RoughNotation>
            <RoughNotation strokeWidth="2" type="circle" color="#000" animate="true" show="true" ><button onClick={() => handleProduce(10)}>3</button></RoughNotation>
            <RoughNotation strokeWidth="2" type="circle" color="#000" animate="true" show ><button onClick={() => handleProduce(9)}>4</button></RoughNotation>
            <br />
            <RoughNotation strokeWidth="2" type="circle" color="#000" animate="true" show ><button onClick={() => handleSpecial(7)}>2</button></RoughNotation>
            <RoughNotation strokeWidth="2" type="circle" color="#000" animate="true" show ><button onClick={() => handleSpecial(8)}>3</button></RoughNotation>
            <RoughNotation strokeWidth="2" type="circle" color="#000" animate="true" show ><button onClick={() => handleSpecial(9)}>4</button></RoughNotation>
            <br/>
            <button onClick={handleSubmit}>Go</button>
          </div>
        </div>
    )
}
