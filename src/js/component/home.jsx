import React, { useEffect, useState } from "react";
import "../../styles/index.scss";

//create your first component

const Home = () => {
	const [counter, setCounter] = useState(0);
	const [counter2, setCounter2] = useState(0);
	const [counter3, setCounter3] = useState(0);
	const [counter4, setCounter4] = useState(0);
	const [counter5, setCounter5] = useState(0);
	const [counter6, setCounter6] = useState(0);
	useEffect(() => {
		setInterval(() => {
			setCounter(counter => counter + (1 % 10));
		}, 1000);
		setInterval(() => {
			setCounter2(counter2 => counter2 + 1);
		}, 10000);
		setInterval(() => {
			setCounter3(counter3 => counter3 + 1);
		}, 100000);
		setInterval(() => {
			setCounter4(counter4 => counter4 + 1);
		}, 1000000);
		setInterval(() => {
			setCounter5(counter5 => counter5 + 1);
		}, 10000000);
		setInterval(() => {
			setCounter6(counter6 => counter6 + 1);
		}, 100000000);
	}, []);

	return (
		<div>
			<i className="far fa-clock"></i>
			<h1>{counter6 % 10}</h1>
			<h1>{counter5 % 10}</h1>
			<h1>{counter4 % 10}</h1>
			<h1>{counter3 % 10}</h1>
			<h1>{counter2 % 10}</h1>
			<h1>{counter % 10}</h1>
		</div>
	);
};

export default Home;
