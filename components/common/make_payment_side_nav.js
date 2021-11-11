import React, { useState } from "react";
import OrderProducts from "./order_products";
import Image from "next/image";

//imported bootstrap components
import { Row, Col, Form, Button } from "react-bootstrap";

//images
import CreditCard from "../../public/images/CreditCard.svg";
import Paypal from "../../public/images/Paypal.svg";
import Cash from "../../public/images/Cash.svg";

//Style
import style from "../../styles/commonComponents.module.css";

export default function makePaymentConfirmation(props) {
  var hide_sidenav = {
    width: "0px",
  };
  return (
    <div
      className={style.show_sidenav}
      style={props.show == false ? hide_sidenav : null}
    >
      <div className="d-flex" style={{ height: "100%", overflow: "hidden" }}>
        <OrderConfirmation handleClose={props.handleClose} />
        <span style={{ borderLeft: "1px solid white" }}></span>
        <Payment handleClose={props.handleClose} />
      </div>
    </div>
  );
}

//Order confirmation
export function OrderConfirmation(props) {
  return (
    <div className={style.payment_side_nav_parent}>
      <a href="#" className="close_btn mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-arrow-return-right"
          viewBox="0 0 16 16"
          onClick={props.handleClose}
        >
          <path
            fill-rule="evenodd"
            d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z"
          />
        </svg>
      </a>

      <div> Order confirmation</div>
      <p className="text-muted font_size_13">Order: #5464</p>
      <hr style={{ borderBottom: "1px solid white" }}></hr>

      <div className={style.payment_side_nav_child}>
        <OrderProducts />
      </div>
      <div className="d-flex justify-content-between mt-1">
        <p>Discount</p>
        <p>2%</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Total amount</p>
        <p>200</p>
      </div>
    </div>
  );
}

// payment
export function Payment(props) {
  return (
    <div className={style.payment_section}>
      <div>Payment</div>
      <p className="text-muted font_size_13">3 payment methods available</p>
      <hr style={{ borderBottom: "1px solid white" }}></hr>
      <div>Payment Method</div>
      <ButtonsGroup />
      <Form.Group className="mt-2" controlId="exampleForm.ControlInput1">
        <Form.Label>Cardholder Name</Form.Label>
        <Form.Control
          type="text"
          className="bg_light_dark"
          placeholder="Jhon dow"
        />
      </Form.Group>
      <Form.Group
        style={{ marginTop: "-5px" }}
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label>Card Number</Form.Label>
        <Form.Control
          type="number"
          className="bg_light_dark"
          placeholder="2323 3434 3454 6545"
        />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group
            style={{ marginTop: "-5px" }}
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Expiration Date</Form.Label>
            <Form.Control type="date" className="bg_light_dark" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group
            style={{ marginTop: "-5px" }}
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>CCV</Form.Label>
            <Form.Control
              type="password"
              className="bg_light_dark"
              placeholder="***"
            />
          </Form.Group>
        </Col>
      </Row>
      <hr style={{ borderBottom: "1px solid white", marginTop: "0px" }}></hr>
      <Row>
        <Col>
          <Form.Group
            style={{ marginTop: "-5px" }}
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Order Type</Form.Label>
            <Form.Control
              type="text"
              className="bg_light_dark"
              placeholder="Dine In"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group
            style={{ marginTop: "-5px" }}
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Table no.</Form.Label>
            <Form.Control
              type="text"
              className="bg_light_dark"
              placeholder="140"
            />
          </Form.Group>
        </Col>
      </Row>
      <br></br>

      <div className="d-flex justify-content-between mt-2">
        <Button
          onClick={props.handleClose}
          className="btn bg_dark"
          style={{ width: "49%", border: "1px solid #ea7c69" }}
        >
          Cancel
        </Button>

        <Button
          className="btn bg_orange"
          style={{ width: "49%", border: "1px solid #ea7c69" }}
        >
          Confirm Payment
        </Button>
      </div>
    </div>
  );
}

//Buttons Group
export function ButtonsGroup() {
  const [activeBtn, setActiveBtn] = useState(1);
  return (
    <div className="d-flex mt-2">
      <Button
        onClick={() => setActiveBtn(1)}
        style={{ width: "23%", border: "1px solid white" }}
        className={`d-flex flex-column justify-content-center align-items-center  ${
          activeBtn == 1 ? "bg_orange" : "bg_dark"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-credit-card"
          viewBox="0 0 16 16"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
          <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
        </svg>

        <span style={{ fontSize: "10px" }}>Credit Card</span>
      </Button>
      <Button
        onClick={() => setActiveBtn(2)}
        style={{ width: "23%", border: "1px solid white" }}
        className={`d-flex flex-column justify-content-center align-items-center mr-2 ml-2 ${
          activeBtn == 2 ? "bg_orange" : "bg_dark"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-credit-card-2-front"
          viewBox="0 0 16 16"
        >
          <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
          <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
        </svg>
        <span style={{ fontSize: "10px" }}>Paypal</span>
      </Button>
      <Button
        onClick={() => setActiveBtn(3)}
        style={{ width: "23%", border: "1px solid white" }}
        className={`d-flex flex-column justify-content-center align-items-center ${
          activeBtn == 3 ? style.activeBtn : "bg_dark"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-cash"
          viewBox="0 0 16 16"
        >
          <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
          <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z" />
        </svg>

        <span style={{ fontSize: "10px" }}>Cash</span>
      </Button>
    </div>
  );
}
