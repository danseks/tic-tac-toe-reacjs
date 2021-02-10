import React, { useState, useEffect } from "react";
import Square from "./square.jsx";
import { Container, Row } from "react-bootstrap";
import { WinnerSelect } from "./helper.jsx";
import PropTypes from "prop-types";

const TableGame = ({ oxPlayer, openModal }) => {
	const [squareArr, setSquareArr] = useState(Array(9).fill(null));
	const [oxNext, setOXNext] = useState(true);
	const [oxMessage, setOxMessage] = useState("");

	const winningInfo = WinnerSelect(squareArr);
	const winner = winningInfo.winner;
	const winnerHighlight = winningInfo.line;

	useEffect(
		() => {
			if (oxPlayer == "X") {
				setOXNext(true);
			} else {
				setOXNext(false);
			}
		},
		[oxPlayer]
	);

	useEffect(
		() => {
			if (openModal) {
				setSquareArr(Array(9).fill(null));
			}
		},
		[openModal]
	);

	useEffect(
		() => {
			if (winner == "O" || winner == "X") {
				setOxMessage("The Winner is... " + winner + " 🏆");
				setTimeout(() => {
					setOXNext(true);
					setSquareArr(Array(9).fill(null));
				}, 3000);
			} else {
				if (squareArr.every(element => element != null)) {
					setOxMessage("It appears to be a draw... 🧠");
					setTimeout(() => {
						setSquareArr(Array(9).fill(null));
					}, 3000);
				} else {
					if (oxNext) {
						setOxMessage("Now it is the turn of X 👈");
					} else {
						setOxMessage("Now it is the turn of O 👈");
					}
				}
			}
		},
		[winner, oxNext, squareArr]
	);
	function renderSquare(i) {
		return (
			<Square
				click={() => {
					const nextSquare = squareArr.slice();
					if (winner) {
						return null;
					} else {
						if (squareArr[i] == null) {
							nextSquare[i] = oxNext ? "X" : "O";
							setOXNext(!oxNext);
							setSquareArr(nextSquare);
						}
					}
				}}
				highlightWinner={winnerHighlight && winnerHighlight.includes(i)}
				oxValue={squareArr[i]}
			/>
		);
	}
	return (
		<Container className="mt-5 tableGame">
			<div className="status">
				<hr className="hr-text" data-content={oxMessage} />
			</div>
			<Row className="justify-content-md-center">
				{renderSquare(0)}
				{renderSquare(1)}
				{renderSquare(2)}
			</Row>
			<Row className="justify-content-md-center">
				{renderSquare(3)}
				{renderSquare(4)}
				{renderSquare(5)}
			</Row>
			<Row className="justify-content-md-center">
				{renderSquare(6)}
				{renderSquare(7)}
				{renderSquare(8)}
			</Row>
		</Container>
	);
};
export default TableGame;

TableGame.propTypes = {
	oxPlayer: PropTypes.string,
	openModal: PropTypes.bool
};
