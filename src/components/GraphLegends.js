import React from "react";

import red from "../assets/images/red.png"
import green from "../assets/images/green.png"


const GraphLegends = () => {
    const style = {
        width:"30px",
        height:"30px"
    }
    return (
        <div className="legends">
            <div>
                <img src={red} style={style}/> <span> Infected Person</span>
            </div>

            <div>
                <img src={green} style={style}/> <span> Healthy Person</span>
            </div>
        </div>
    )
}

export default GraphLegends;