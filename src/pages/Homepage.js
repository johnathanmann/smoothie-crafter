import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Context } from "../assets/Context";
import "../styles/styles.css";

export default function Homepage(){
    const [fruitAmount, setFruitAmount] = useState();
    const [context, setContext] = useContext(Context);
    const navigate = useNavigate();
    console.log(fruitAmount)

    const handleSubmit = (e) => {
        navigate('/generator', {state: fruitAmount})
      }
    return(
        <div>
            <button onClick={() => setContext({ fruitAmount: 1 })}>1</button>
            <button onClick={() => setContext({ fruitAmount: 2 })}>2</button>
            <button onClick={() => setContext({ fruitAmount: 3 })}>3</button>
            <button onClick={() => setContext({ fruitAmount: 4 })}>4</button>
            <button onClick={handleSubmit}>Go</button>
        </div>
    )
}
