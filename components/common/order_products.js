import React, { useState } from "react";
import Image from "next/image";

//imported bootstrap components
import { Button } from "react-bootstrap";

//Icons
import Delete from "../../public/images/Delete.svg";

//Style
import style from "../../styles/commonComponents.module.css";

//images
import image1 from "../../public/images/index/image1.jpg";
import image2 from "../../public/images/index/image2.jpg";
import image3 from "../../public/images/index/image3.jpg";
import image4 from "../../public/images/index/image4.jpg";
import image5 from "../../public/images/index/image5.jpg";

export default function orderProducts() {
  const [data, setData] = useState([
    {
      name: "Spaciy seasoned seafood noodles",
      price: 3.99,
      quantity: 3,
      note: "Please do not make it more salty and it should soft",
      image: image1,
    },
    {
      name: "Salted pasta with mushroom sauce",
      price: 5.99,
      quantity: 2,
      note: "Please deliver it on time do not make a delay",
      image: image2,
    },
    {
      name: "beef dumpling in hot and sour soup",
      price: 2.99,
      quantity: 1,
      note: "Please deliver it on time do not make a delay",
      image: image3,
    },
    {
      name: "Healthy nnoodle with spinach leaf",
      price: 3.99,
      quantity: 3,
      note: "Please do not make it more salty and it should soft",
      image: image4,
    },
    {
      name: "hot spicy fried rice with omelet",
      price: 1.99,
      quantity: 4,
      note: "Please deliver it on time do not make a delay",
      image: image5,
    },
  ]);
  return (
    <div>
      {data.map((item) => {
        return <CartData data={item} />;
      })}
    </div>
  );
}

export function CartData(props) {
  const { name, price, quantity, note, image } = props.data;
  return (
    <div>
      <div className="d-flex justify-content-between font_size_13">
        <div className="d-flex justify-content-start align-items-center">
          <div style={{ borderRadius: "50%" }}>
            <Image
              src={image}
              width={50}
              height={50}
              className="rounded-circle"
            />
          </div>
          <div className="ml-2 list_style_none">
            <li>{name.slice(0, 20) + "..."}</li>
            <li className="text-muted">$ {price}</li>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <li
            style={{ width: "30px" }}
            className="p-2 mr-3 text-center bg-dark rounded list_style_none"
          >
            {quantity}
          </li>
          <li className="ml-2 list_style_none">
            {parseFloat(price) * parseFloat(quantity)}
          </li>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-1 font_size_13">
        <p style={{ width: "83%" }} className="p-2 pl-2 mr-3 bg-dark rounded">
          {note.slice(0, 35) + "..."}
        </p>
        <Button className={`d-flex ${style.delete_product_icon}`}>
          <Image src={Delete} width={24} height={20} />
        </Button>
      </div>
    </div>
  );
}

export function total(data) {
  var total = 0;
  data.map((item) => {
    return (total += parseFloat(item.price) * parseFloat(item.quantity));
  });

  return Math.round(total);
}
