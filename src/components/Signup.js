import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Signup = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <Nav.Link onClick={handleShow} className="navbar-links pb-0">
        <FontAwesomeIcon className="navbar-icon" icon={faUser} />
        <div>Profile</div>
      </Nav.Link>

      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
        className="singupModal"
      >
        <Modal.Body>
          <Row>
            <Col className="d-flex justify-content-center ">
              <div className="pt-5">
                <h6 className="pb-5">Task App</h6>
                <Form>
                  <Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox" className="mb-3">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Submit
                  </Button>
                </Form>
                <h6 className="pt-5">
                  Don't have an account?{" "}
                  <span className="text-decoration-underline cursor-pointer">
                    Register
                  </span>
                </h6>
              </div>
            </Col>
            <Col>
              <img
                className="w-100"
                src="./assets/singupModalWallpaper.jpg"
                alt="Singup Modal"
              />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Signup;
