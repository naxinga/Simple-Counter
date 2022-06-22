import React from "react";
import PropType from "prop-types";

let suma = 0;
const incSeg =() =>{
    //if (suma <=9 ){
    suma +=1;
    return suma;
    //}else{
    //     return suma = 0;
    // }
}

//let one = setInterval(incSeg,1000);


const Counter = (props) => {
    const interval = setInterval(
        incSeg(),2000
    );
    //let one = setInterval(incSeg,1000);
    console.log(interval);
    return  <div>{props.one}</div>
	
};

Counter.propTypes = {
    segundos: PropType.string,
}

export default Counter;