import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function AutoLayoutExample() {
  return (
    <Container style={{marginTop:'100px'}}>

      
      <Row>
        <Col xs={2}><Form.Select size="sm">
        <option>Large select</option>
      </Form.Select></Col>
        <Col xs={6}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col xs={5}>2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>
     
    </Container>
  );
}

export default AutoLayoutExample;
