import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dogs from './Dogs';

function DogCards() {
  return (
    <Row xs={1} sm={2} lg={3} className="g-4 ms-5 me-5">
      {Array.from({ length: 9 }).map((_, idx) => (
        <Col key={idx}>
          <Dogs/>
        </Col>
      ))}
    </Row>
  );
}

export default DogCards;