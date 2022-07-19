import React from "react";
import PropType from "prop-types";

/*let suma = 0;
const incSeg =() =>{
    //if (suma <=9 ){
    suma +=1;
    return suma;
    //}else{
    //     return suma = 0;
    // }
}

let one = setInterval(incSeg,1000);*/




const Counter = (props) => {
    return  <div className="Contador card">
                <div className="Seis card2">{props.Seis % 10} {props.Cinco % 10} {props.Cuatro % 10} {props.Tres % 10} {props.Dos % 10} {props.Uno % 10}</div>
            </div>
	
};


export default Counter;
