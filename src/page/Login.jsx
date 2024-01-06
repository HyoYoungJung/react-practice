import React, { useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  // id , password useState
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    console.log(id)
  }, [id])

  useEffect(() => {
    console.log(password)
  }, [password])

  const moveSignUp = () => {
    navigate("/signup");
  }  

  const changeLoggedIn = () => {
    setLogin(true)
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ID</Form.Label>
              <Form.Control onChange={(e) => setId(e.target.value)} type="email" placeholder="Enter your ID" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>

            <div style={{display : 'flex', justifyContent : 'space-between'}}>
              <Button onClick={changeLoggedIn} variant="warning" style={{width : "45%"}}>
                Login
              </Button>
              <Button onClick={moveSignUp} variant="primary" style={{width : "45%"}}>
                SignUp
              </Button>
            </div>
            
            {/* {isLogin && (
              <div>
                <p>ID: {id}</p>
                <p>Password: {password}</p>
              </div>
            )} */}

            {isLogin ? (
                    <div>
                      <p>ID: {id}</p>
                      <p>Password: {password}</p>
                    </div>
                  ): (
            <div>
            <p>로그인 하십쇼</p>
            </div>
            )}

          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
