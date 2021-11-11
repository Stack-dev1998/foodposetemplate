import Image from "next/image";
import { useState } from "react";

//bootstrap components
import { Row, Col } from "react-bootstrap";

//images
import image1 from "../../public/images/index/image1.jpg";
import image2 from "../../public/images/index/image2.jpg";
import image3 from "../../public/images/index/image3.jpg";
import image4 from "../../public/images/index/image4.jpg";
import image5 from "../../public/images/index/image5.jpg";
import image6 from "../../public/images/index/image6.jpg";
import image7 from "../../public/images/index/image7.jpg";
import image8 from "../../public/images/index/image8.jpg";

//Style
import style from "../../styles/index/index.module.css";

export default function Cards(params) {
  const [data, setData] = useState([
    {
      name: "Spaciy seasoned seafood noodles",
      price: "$ 5.99",
      description: "20 bowls available",
      image: image1,
    },
    {
      name: "Salted pasta with mushroom sauce",
      price: "$ 3.99",
      description: "11 bowls available",
      image: image2,
    },
    {
      name: "beef dumpling in hot and sour soup",
      price: "$ 2.99",
      description: "16 bowls available",
      image: image3,
    },
    {
      name: "Healthy nnoodle with spinach leaf",
      price: "$5.99",
      description: "22 bowls available",
      image: image4,
    },
    {
      name: "hot spicy fried rice with omelet",
      price: "$2",
      description: "24 bowls available",
      image: image5,
    },
    {
      name: "Salted pasta with mushroom sauce",
      price: "$ 3.99",
      description: "11 bowls available",
      image: image6,
    },
    {
      name: "beef dumpling in hot and sour soup",
      price: "$ 2.99",
      description: "16 bowls available",
      image: image7,
    },
    {
      name: "Spaciy seasoned seafood noodles",
      price: "$ 5.99",
      description: "20 bowls available",
      image: image8,
    },
    {
      name: "Salted pasta with mushroom sauce",
      price: "$ 3.99",
      description: "11 bowls available",
      image: image2,
    },
  ]);
  return (
    <Row>
      {data.map((item) => {
        return (
          <Col xs="12" md="4">
            <div className={style.card}>
              <div className={`text-center mt-4 ${style.card_text}`}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h5 className="mt-1">{item.name}</h5>
                <p>{item.price}</p>
                <p className="text-muted " style={{ lineHeight: "1px" }}>
                  {item.description}
                </p>
              </div>
              <div className="w-100 d-flex justify-content-center">
                <Image
                  src={item.image}
                  width={170}
                  height={170}
                  className="rounded-circle "
                />
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
}
