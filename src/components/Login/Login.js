import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import Card from '../../Utils/Card';
import './styleSheet/Login.css';
import swal from 'sweetalert';


const Login = () => {
    // localStorage.clear()
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(true)
    const [allValues, setAllValues] = useState({
        email: '',
        password: '',
    });

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const changeHandler = e => {
        setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }
    // https://reqres.in/api/login
    const handleLogin = (event) => {
        console.log(allValues);
        event.preventDefault();
        console.log("login");
        const head = allValues
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(head)
        }).then(response => response.json().then(data => {
            window.localStorage.setItem('token', data.token)
            if (data.token) {
                swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                    timer: 2000
                }).then(() => {
                    navigate('./home')
                })
            } else {
                swal({
                    title: "User name or Password incorrect !",
                    text: "try again!",
                    icon: "warning",
                    buttons: 'Try again!'
                })
            }
        })).catch(err => {
            console.log(err);
        })
    }



    return (
        <div style={{ height: "100vh" }}>
            <div style={{ height: '10vh' }}>

            </div>
            <Card className="loginCard">
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' onChange={changeHandler} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' onChange={changeHandler} type={showPassword ? "password" : 'text'} placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onChange={handleShowPassword} type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
        </div>
    )
}

export default Login
