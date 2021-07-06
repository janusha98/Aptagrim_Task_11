import React,{useEffect,useState}  from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card,Row,Col,Form} from "react-bootstrap";
import axios from "axios";

const Product = (props) => {
  const [currency,setCurrency] = useState({});
  const [currentConversionRate, setCurrentConversionRate] = useState(1);
  let allProducts = [{image:"holder.js/100px180",title:"Car",price:"80"},
    {image:"holder.js/100px180",title:"bike",price:"80"},
    {image:"holder.js/100px180",title:"honda",price:"80"}
  ];
  const changeCurrencyType =(e) => {
    const currencyValue = e.target.value;
    if(currency.result == "success"){
      if(currency.conversion_rates[currencyValue]){
        setCurrentConversionRate(currency.conversion_rates[currencyValue])
      }
    }
  };
  useEffect(() => {
    axios.get('https://v6.exchangerate-api.com/v6/a62668a95e5e4be06717ab30/latest/INR')
    .then(response => setCurrency(response.data))
  });
   return(
     allProducts.map((product,id) => 
     <Row> 
       <Col lg={9}>
        <Card>
        <Col lg={4}>
        <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.price*currentConversionRate}
              </Card.Text>
            </Card.Body>
          </Col>
      </Card>
      </Col>
      <Col lg={3}>
      <Form.Control as="select" onChange={changeCurrencyType}>
        <option>INR</option>
        <option>USD</option>
      </Form.Control>
      </Col>
   </Row>
  ) 
  )
}
export default Product;
