import React, { useState } from "react";
import SecondsCounter from "./SecondsCounter.jsx";
import "../../styles/index.scss";

//create your first component

const Home = () => {
	let time = 0;
	setInterval(function() {
		const tensThousands = Math.floor(time / 10000);
		const thousands = Math.floor(time / 1000);
		const hundreds = Math.floor(time / 100);
		const tens = Math.floor(time / 10);
		const ones = Math.floor(time / 1);
		time++;
	}, 1000);
	return (
		<>
			<SecondsCounter
				tenThousandSeconds={tensThousands}
				thousandSeconds={thousands}
				hundredSeconds={hundreds}
				tenSeconds={tens}
				oneSeconds={ones}
			/>
		</>
	);
};

export default Home;
