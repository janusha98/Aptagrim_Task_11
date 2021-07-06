import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Row, Col, Form, Container } from "react-bootstrap";
import axios from "axios";

const Product = (props) => {
  let allProducts = [
    {
      image: "/bag.jpg",
      title: "Bag",
      price: 80
    },
    {
      image: "/shoe.jpg",
      title: "Shoes",
      price: 100
    },
    {
      image: "/watch.jpg",
      title: "Watch",
      price: 180
    }
  ];

  const [currency, setCurrency] = useState({});
  const [currentConversionRate, setCurrentConversionRate] = useState(1);

  const changeCurrencyType = (e) => {
    const currencyValue = e.target.value;
    if (currency.result === "success") {
      if (currency.conversion_rates[currencyValue]) {
        setCurrentConversionRate(currency.conversion_rates[currencyValue]);
      }
    }
  };

  useEffect(() => {
    axios
      .get(
        "https://v6.exchangerate-api.com/v6/7697dc6ab636cf10427c967c/latest/INR"
      )
      .then((response) => setCurrency(response.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={8}>
          <Row>
            {allProducts.map((product, id) => (
              <Col lg={4} key={id}>
                <div>
                  <Card>
                    <Card.Img src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>
                        {(product.price * currentConversionRate).toFixed(2)}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
        <Col lg={4}>
          <label>
            <b>Currency</b>
          </label>
          <Form.Control as="select" onChange={changeCurrencyType}>
            <option>INR</option>
            <option>USD</option>
          </Form.Control>
        </Col>
      </Row>
    </Container>
  );
};
export default Product;
