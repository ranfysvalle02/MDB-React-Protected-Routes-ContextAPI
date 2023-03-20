import React, { useEffect } from "react";
import {useState} from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from "../hooks/useAuth";

function Navigation() {
  const { login,logout } = useAuth();

  const { authed, loading } = useAuth();

  const [loginEmail,setLoginEmail] = useState("demo@demo.com")
  const [loginPassword,setLoginPassword] = useState("demo@demo.com")

  const userLogout = async function(){
    await logout();
  };
  const userLogin = async function(){
    await login(loginEmail,loginPassword);
  };

  useEffect(()=>{
    console.log('authed',authed);
  },[])
   return (
      
      <Navbar bg="light" expand="lg" fixed="top" >
      <Container>
        <Navbar.Brand href="/">

        <h1 style={{
          }}>d3m0</h1>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
        {authed && 

            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
            <Nav.Link href="/feed">Private</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>  
            <Nav.Link onClick={()=> userLogout()}>Logout</Nav.Link>  
            </Nav>

        }
        {!authed && 

            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >

            </Nav>

          }

          {authed && 
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success"><span style={{paddingTop:"10px"}} className="material-icons">manage_search</span></Button>
            </Form>

          }

          {!authed && 
              <Form className="d-flex">
                <Form.Control
                  type="email"
                  placeholder="E-Mail Address"
                  value={loginEmail} onChange={(e)=>{setLoginEmail(e.target.value)}}
                />
                <Form.Control type="password" placeholder="Password" 
                  value={loginPassword} onChange={(e)=>{setLoginPassword(e.target.value)}}
                />
                <Button variant="outline-success" onClick={userLogin}><span style={{paddingTop:"10px"}} className="material-icons">east</span></Button>
              </Form>
          }
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
   );
}

export default Navigation;
