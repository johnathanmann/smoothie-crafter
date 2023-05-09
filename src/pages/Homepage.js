import { useNavigate } from "react-router-dom";
import React from "react";
import "../styles/styles.css";

export default function Homepage(){
    const navigate = useNavigate();

    function handleProduce(e) {
      localStorage.setItem("produceNumber", e );
    }

    const handleSubmit = (e) => {
        navigate('/generator')
      }
    return(
        <div>
            <button onClick={() => handleProduce(10)}>1</button>
            <button onClick={() => handleProduce(9)}>2</button>
            <button onClick={() => handleProduce(8)}>3</button>
            <button onClick={() => handleProduce(7)}>4</button>
            <button onClick={handleSubmit}>Go</button>
        </div>
    )
}
