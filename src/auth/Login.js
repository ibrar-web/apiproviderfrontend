
import { Form, Input, Button, Checkbox } from 'antd';
import { useState, useEffect } from 'react';
import './login.css';
import longinpng from '../assets/login.png';
import Navbar from '../components/Navbar/Navbar';
// import Navigation from '../navigation/Navigation'

// import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import "@fortawesome/fontawesome-free/css/all.min.css"

// let credentials = false;

var data;
const Login = () => {
  const onFinish = (values) => {
    // credentials = true;

    console.log("Success:", values.username, values.password);
    setUsername(values.username);
    setPassword(values.password);
    console.log(username, password);
    setSuccess(true);


    const axios = require('axios');

    // Make a request for a user with a given ID
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(function (response) {

        let result = response;
        console.log(result.data);

      })
      .catch(function (error) {

        console.log("This is the error", error);
      })

    axios.post('https://dummyjson.com/auth/login', {
      username: values.username,
      password: values.password
    })
      .then(function (response) {
        console.log(response.data);
        data = response.data.username;
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });

  };




  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);



  useEffect(() => {
    setError('');
  }, [username, password])


  return (
    <>
      {success ? (
        <section>
          <BrowserRouter>
          <Routes>
            <Route path="*" element={<Navbar />} />
            </Routes>
          </BrowserRouter>
        </section>
      ) : (

        <div className="login-page">
          <div className="login-box">
            <div className="illustration-wrapper">
              <img
                src={longinpng}
                alt="Login"
              />
            </div>
            < Form
              name="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <p className="form-title">Admin Dasboard</p>

              < Form.Item
                name="username"
                rules={[{ required: true, message: "Please input your username!" }]}
              >
                < Input placeholder="Username" />
              </ Form.Item>

              < Form.Item
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
                < Input.Password placeholder="Password" />
              </ Form.Item>

              < Form.Item name="remember" valuePropName="checked">
                < Checkbox>Remember me</ Checkbox>
              </ Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  LOGIN
                </ Button>
              </ Form.Item>
            </ Form>
          </div>

        </div>
      )
      }
    </>
  );
};



export default Login;