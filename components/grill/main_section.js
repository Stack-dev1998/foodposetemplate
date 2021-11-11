import React from "react";

//bootstrap components
import { Button } from "react-bootstrap";

//imported components
import Header from "../common/header";
import Cards from "./cards";
export default function mainSection() {
  return (
    <main>
      <Header />
      <div className="d-flex justify-content-between">
        <h4>Choose Dishes</h4>
        <Button style={{ backgroundColor: "#1F1D2B", border: "none" }}>
          <Icon /> Dine In
        </Button>
      </div>
      <br></br>
      <Cards />
    </main>
  );
}

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-chevron-down"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
}
