import React, { useState } from "react";

//create your first component

const Home = () => {
	const [time, setTime] = useState(0);
	let clock = clock + 1;
	setInterval(clock, 1000);
	return <div>{time}</div>;
};

export default Home;
