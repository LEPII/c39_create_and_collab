import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const LogForm = () => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);
  const history = useHistory();

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', formData);
      setCurrentUser(response.data);
      sessionStorage.setItem('user', JSON.stringify(response.data));
      history.push('/home');
    } catch (error) {
      console.log('Login Error: ' + error);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/create', formData);
      sessionStorage.setItem('user', JSON.stringify(response.data));
      setCurrentUser(response.data.user);
      history.push('/user-edit-page');
    } catch (error) {
      console.log('Login Error: ' + error);
    }
  };
  return (
    <div>
      <h1 className="mb-4">Log In</h1>
      <Form style={{ width: 300 }} onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label htmlFor="email">Email Address</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <Button type="submit">Login</Button>
        </Form.Group>
      </Form>

      <h3 className="mb-4">Sign Up</h3>
      <Form style={{ width: 300 }} onSubmit={handleSignUp}>
        <Form.Group>
          <Form.Label htmlFor="fullName">Full Name</Form.Label>
          <Form.Control
            id="fullName"
            type="text"
            placeholder="Full Name"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="email">Enter Email</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="JonSnowTheWatcher@TheWall.com"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Enter Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            placeholder="hopefully not password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="d-flex justify-content-center">
          <Button type="submit">Sign Up</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default LogForm;
