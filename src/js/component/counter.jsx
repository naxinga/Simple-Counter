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
    return  <div>{props.segundos}</div>
	
};


export default Counter;
