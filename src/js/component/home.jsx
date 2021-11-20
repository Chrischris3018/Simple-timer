import React, { useState } from "react";

//create your first component

const Home = () => {
	const [time, setTime] = useState(0);

	let clock = setInterval(clock, [1000]);
	console.log(clock);
	return <div>{time}</div>;
};

export default Home;
