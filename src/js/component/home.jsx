import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Counter from "./counter.jsx";

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
                <Counter/>
                </div>
            </div>
        </div>
		</div>
	);
};

export default Home;
