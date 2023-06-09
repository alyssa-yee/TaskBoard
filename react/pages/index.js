import Head from 'next/head'
import Link from "next/link"
import Layout from "./layout/layout.js"
import React, { useRef, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'; //npm install react-bootstrap
import axios from 'axios'; //npm install axios

export default function Home() {
  //MODAL
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const handleModalOpen = (content) => {
    setModalContent(content);
    setShowModal(true);
  };
  
  //USER/PASS VAR
  const usernameRef = useRef();
  const passwordRef = useRef();
  const register_usernameRef = useRef();
  const register_passwordRef = useRef();
  //LOGIN
  const handleLogin = async () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', {
        username: username,
        password: password
      });
      //clear
      usernameRef.current.value = "";
      passwordRef.current.value = "";
      // Handle successful login response
      console.log(response.data.message);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  };

  //REGISTER
  const handleRegistration = async () => {
    const username = register_usernameRef.current.value;
    const password = register_passwordRef.current.value;
    console.log(username,password)
    try {
      const response = await axios.post('http://127.0.0.1:5000/register', {
        username: username,
        password: password
      });
      //clear
      register_usernameRef.current.value = "";
      register_passwordRef.current.value = "";
      // Handle successful login response
      console.log(response.data.message);
    } catch (error) {
      // Handle error
      console.error(error);
    }
  }

    
  return (
    <Layout home>
      <Head>
        <title>Welcome Page - Sign-In Page</title>
      </Head>

      {/* REGISTER/LOGIN BUTTONS */}
      <div className="account-items">
        <Link href="">
          <h1 id="account-btn" onClick={() => handleModalOpen('REGISTER')}>REGISTER</h1>
        </Link>
        <Link href="">
          <h1 id="account-btn" onClick={() => handleModalOpen('LOGIN')}>LOGIN</h1>
        </Link>
      </div>
      
      {/* POP-UP MODALS */}
      <Modal show={showModal} onHide={() => setShowModal(false)} id='Login-Register-Modal'>
        <Modal.Header > {/* Header: Title and Cancel Button */}
          <Modal.Title className='LRModal-Title'>{modalContent}</Modal.Title> {/*Title: Register / Login*/}
          <button type="button" className="login/register-cancel" onClick={() => setShowModal(false)}>Cancel </button> {/* Cancel Button */}
        </Modal.Header>
        <Modal.Body id = 'LRModal-Credentials'>
          {modalContent === 'REGISTER' ? (
            <Form>
              <Form.Group controlId="registerEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control ref={register_usernameRef} placeholder="Enter Username" /> {/*USERNAME*/}
              </Form.Group>
              <Form.Group controlId="registerPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref = {register_passwordRef} type="password" placeholder="Password" /> {/*PASSWORD*/}
              </Form.Group>
              <Button onClick = {handleRegistration} variant="primary">Register</Button>
            </Form>
          ) : (
            <Form>
              <Form.Group controlId="loginEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control ref={usernameRef} placeholder="Enter Username" /> {/*USERNAME*/}
              </Form.Group>
              <Form.Group controlId="loginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref = {passwordRef} type="password" placeholder="Password" /> {/*PASSWORD*/}
              </Form.Group>
              <Button onClick = {handleLogin} variant="primary">Login</Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </Layout>
  )
}

/* 
CREDIT: 

Next.js set-up: https://youtube.com/playlist?list=PLynWqC6VC9KOvExUuzhTFsWaxnpP_97BD

*/