import React, { useState } from "react";
import { useRouter } from "next/router";

//imported bootstrap components
import { InputGroup, Button } from "react-bootstrap";

//imported components
import OrderProducts from "./order_products";
import MakePaymentSideNav from "./make_payment_side_nav";

//Style
import style from "../../styles/commonComponents.module.css";

export default function rightSidebar() {
  const [show, setShow] = useState(false);
  const [activeBtn, setActiveBtn] = useState(1);
  const router = useRouter();
  return (
    <div className={style.right_sidebar_parent}>
      <h5>Orders #16543</h5>
      <InputGroup>
        <Button
          onClick={() => setActiveBtn(1)}
          className={`border border-secondary  btn-secondry btn-sm ${
            activeBtn === 1 ? "bg_orange" : "bg_dark"
          }`}
        >
          Dine In
        </Button>
        <Button
          onClick={() => setActiveBtn(2)}
          className={`border border-secondary btn-secondry mx-2 btn-sm ${
            activeBtn === 2 ? "bg_orange" : "bg_dark"
          }`}
        >
          To Go
        </Button>
        <Button
          onClick={() => setActiveBtn(3)}
          className={`border border-secondary btn-secondry btn-sm ${
            activeBtn === 3 ? "bg_orange" : "bg_dark"
          }`}
        >
          Delivery
        </Button>
      </InputGroup>

      <br></br>
      <div className="d-flex justify-content-between border-bottom">
        <p>Item</p>
        <div className="d-flex">
          <p className="mr-3">Qty</p>
          <p className="ml-3">Price</p>
        </div>
      </div>
      <br></br>
      <div className={style.right_sidebar_child}>
        <OrderProducts />
      </div>

      <div className="d-flex justify-content-between border-top pt-2">
        <p>Discount</p>
        <p>$0</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Sub Total</p>
        <p>{120}</p>
      </div>
      <Button
        className="p-2 btn btn-sm btn-block btn_bg_orange"
        onClick={() => {
          setShow(true);
        }}
      >
        Make payment
      </Button>
      <br></br>

      <MakePaymentSideNav
        show={show}
        handleClose={() => {
          setShow(false);
        }}
      />
    </div>
  );
}
