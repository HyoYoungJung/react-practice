import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Forms from '../component/Forms';

const SignUp = () => {
  const datas = ["ID", "Password", "Nickname", "Address"];

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form>
            {datas.map((type) => (
              <Forms type = {type}/>
            ))}
            <div className="d-flex justify-content-center">
              <Button variant="primary" style={{width : "100%"}}>
                SignUp
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUp
