import "../styles/generator.css";
import React, { useContext } from "react";
import { Context } from "../assets/Context";
export default function Generator(){
    const [context, setContext] = useContext(Context);
    console.log(context)
    return(
        <div>
            <h1>{context.fruitAmount}</h1>
        </div>
    )
}