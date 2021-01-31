import React, { useState } from "react";
import { Modal, Button, Col, Row, Container } from "react-bootstrap";
import TableGame from "./tableGame.jsx";

function ModalWindow() {
	const [showModal, setShow] = useState(true);
	const [playerXO, setPlayerXO] = useState("");

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div
				className="d-flex align-items-center justify-content-center"
				style={{ height: "70vh" }}>
				<TableGame oxPlayer={playerXO} openModal={showModal} />
			</div>
			<div>
				{" "}
				<Row className="d-flex justify-content-center mt-5">
					<Button
						className="buttonMenu shadow-none mt-4"
						onClick={() => {
							handleShow();
						}}>
						Go to menu
					</Button>
				</Row>
			</div>
			<Modal
				show={showModal}
				onHide={handleClose}
				dialogClassName="modal-90w"
				aria-labelledby="example-custom-modal-styling-title"
				centered
				backdrop="static"
				keyboard={false}>
				<Modal.Body className="show-grid">
					<Container>
						<Row>
							<Col className="d-flex justify-content-center">
								<h3 className="modal-h3">
									CHOOSE YOUR WEAPON 🔥
								</h3>
							</Col>
						</Row>
						<Row>
							<Col className="d-flex justify-content-end">
								<Button
									className="buttonXO shadow-none"
									onClick={() => {
										handleClose();
										setPlayerXO("X");
									}}>
									X
								</Button>{" "}
							</Col>
							<Col>
								<Button
									className="buttonX shadow-none"
									onClick={() => {
										handleClose();
										setPlayerXO("O");
									}}>
									O
								</Button>
							</Col>
						</Row>
					</Container>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default ModalWindow;
