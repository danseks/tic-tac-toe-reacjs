import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Square = ({ oxValue, click, highlightWinner }) => {
	const className = "buttonSquare" + (highlightWinner ? "Winner" : "");
	return (
		<Button className={className + " shadow-none"} onClick={click}>
			{oxValue}
		</Button>
	);
};

Square.propTypes = {
	oxValue: PropTypes.string,
	click: PropTypes.func,
	highlightWinner: PropTypes.bool
};

export default Square;
