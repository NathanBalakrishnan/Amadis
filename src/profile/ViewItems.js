import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { selectedItems, addToCart } from '../Store/productSlice'; // Assuming addToCart action is defined in productSlice
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';

function ViewItems() {
  const dispatch = useDispatch();
  const { product } = useSelector(selectedItems);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  async function handleAddToCart() {
    setCount(count + 1);
    await dispatch(addToCart({ quantity: count + 1, product }));
    navigate('/AddToCart');
  }

  return (
    <div>
      <h1 className='text-warning'>View Items</h1>
      <Container className='p-5'>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant='top' src={product.image} />
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem', padding: '40px' }}>
              <h3 className='text-left text-secondary'>{product.description}</h3>
              <br />

              <ListGroup>
                <ListGroup.Item className='text-xxl'>ProductName : {product.description}</ListGroup.Item>
                <ListGroup.Item className='text-xxl'>Price: {product.price}</ListGroup.Item>
                <ListGroup.Item className='text-xxl'>Discount: {product.discount} %</ListGroup.Item>
              </ListGroup>
              <Button variant='primary p-3 mt-3' onClick={handleAddToCart}>
                Add To Cart
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ViewItems;
