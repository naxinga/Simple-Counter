import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Counter from "./counter.jsx";



  

const d = new Date();
let sec = d.getSeconds();

let one = setInterval(sec,1000);

function ren (){
	render ()
}

//create your first component
const Home = () => {
	return (
		<div className="main">
			<div className="container">
            <div className="row">
                <div className="col">
                1
                </div>
                <div className="col">
                2
                </div>
                <div className="col">
                3
                </div>
                <div className="col">
                4
                </div>
                <div className="col">
                5
                </div>
                <div className="col">
                <Counter segundos={one}/>
                </div>
            </div>
        </div>
		</div>
	);
};

export default Home;
