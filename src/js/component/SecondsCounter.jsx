import React, { useState } from "react";
import PropTypes from "prop-types";

function SecondsCounter(props) {
	return (
		<div className="clock">
			<div className="tensThousands">{props.tenThousandSeconds}</div>
			<div className="thousands">{props.thousandSeconds}</div>
			<div className="hundreds">{props.hundredSeconds}</div>
			<div className="tens">{props.tenSeconds}</div>
			<div className="ones">{props.oneSeconds}</div>
		</div>
	);
}
SecondsCounter.propTypes = {
	tenThousandSeconds: PropTypes.number,
	thousandSeconds: PropTypes.number,
	hundredSeconds: PropTypes.number,
	tenSeconds: PropTypes.number,
	oneSeconds: PropTypes.number
};

let time = 0;
setInterval(function() {
	const tensThousands = Math.floor(time / 10000);
	const thousands = Math.floor(time / 1000);
	const hundreds = Math.floor(time / 100);
	const tens = Math.floor(time / 10);
	const ones = Math.floor(time / 1);
	time++;
}, 1000);
export default SecondsCounter.jsx;
