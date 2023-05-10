import { useNavigate } from "react-router-dom";
import React from "react";
import "../styles/styles.css";

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
    return(
        <div>
            <button onClick={() => handleProduce(11)}>2</button>
            <button onClick={() => handleProduce(10)}>3</button>
            <button onClick={() => handleProduce(9)}>4</button>
            <br />
            <button onClick={() => handleSpecial(7)}>2</button>
            <button onClick={() => handleSpecial(6)}>3</button>
            <button onClick={() => handleSpecial(5)}>4</button>
            <button onClick={handleSubmit}>Go</button>
        </div>
    )
}
