import * as React from "react";
import ItemList from "../components/ItemList";
import {useState} from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from "../hooks/useAuth";

function Home() {
   const [registerEmail,setRegisterEmail] = useState("");
   const [registerPassword,setRegisterPassword] = useState("");
   const { register } = useAuth();
   const { authed, loading } = useAuth();

   const registerUser = function(){
      register(registerEmail,registerPassword);
      setRegisterEmail("");
      setRegisterPassword("");
   };

   return <div className="home-content">
            <p>This is another public route. Please login to save your avatar to our public collection.</p>
            <hr />
            <div>
               <Alert show={true} variant="success" >
                  <Alert.Heading>{!authed?"Don't have an account?! Sign up now!":"Welcome friend."}</Alert.Heading>
                  <p>
                     Signing up for D3M0 is simple, and best of all - FREE
                  </p>
                  <hr />
                  {!authed &&
                     <div className="">
                        <Form.Group controlId="formBasicEmail" style={{maxWidth:"320px","margin":"0 auto"}}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={registerEmail} onChange={(e)=>{setRegisterEmail(e.target.value)}}/>
                        <Form.Text className="text-muted">
                           We'll never share your email with anyone else.
                        </Form.Text>
                        </Form.Group>
            
                        <Form.Group  controlId="formBasicPassword" style={{maxWidth:"320px","margin":"0 auto"}}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={registerPassword} onChange={(e)=>{setRegisterPassword(e.target.value)}} />
                        </Form.Group>
                        <hr />
                        <Button variant="primary" type="submit" onClick={registerUser}>
                        Submit
                        </Button>
                     </div>
                  }
                  
               </Alert>
               <Row xs={1} md={4} className="g-4">
               <Col>
                        <Card>
                           <Card.Img variant="top" src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
                           <Card.Body>
                           <Card.Title>Box A</Card.Title>
                           <Card.Text>
                           rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp
                           </Card.Text>
                           </Card.Body>
                        </Card>
                     </Col>
                     <Col>
                        <Card>
                           <Card.Img variant="top" src="https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
                           <Card.Body>
                           <Card.Title>Box B</Card.Title>
                           <Card.Text>
                           rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp
                           </Card.Text>
                           </Card.Body>
                        </Card>
                     </Col>
                     <Col>
                        <Card>
                           <Card.Img variant="top" src="https://images.unsplash.com/photo-1489367874814-f5d040621dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2292&q=80" />
                           <Card.Body>
                           <Card.Title>Box C</Card.Title>
                           <Card.Text>
                           rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp
                           </Card.Text>
                           </Card.Body>
                        </Card>
                     </Col>
                     <Col>
                        <Card>
                           <Card.Img variant="top" src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
                           <Card.Body>
                           <Card.Title>Box D</Card.Title>
                           <Card.Text>
                           rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp
                           </Card.Text>
                           </Card.Body>
                        </Card>
                     </Col>
                     
                  </Row>
               </div>
         </div>;
}

export default Home;
