import { useNavigate } from "react-router-dom";
import React from "react";
import "../styles/styles.css";

export default function Homepage(){
    const navigate = useNavigate();

    function handleFruit(e) {
      localStorage.setItem("fruitNumber", e );
    }

    const handleSubmit = (e) => {
        navigate('/generator')
      }
    return(
        <div>
            <button onClick={() => handleFruit(1)}>1</button>
            <button onClick={() => handleFruit(2)}>2</button>
            <button onClick={() => handleFruit(3)}>3</button>
            <button onClick={() => handleFruit(4)}>4</button>
            <button onClick={handleSubmit}>Go</button>
        </div>
    )
}
