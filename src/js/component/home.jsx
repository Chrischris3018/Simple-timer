import React, { useState } from "react";

//create your first component

const Home = () => {
	const [time, setTime] = useState(0);
	const incrementTime = () => {};
	let clock = setInterval(clock, 1000);
	console.log(clock);
	return <div>{time}</div>;
};

React.useEffect(Home, []);

export default Home;
