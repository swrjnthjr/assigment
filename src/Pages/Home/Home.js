import React from 'react'
import { Navbar, Nav, Container, Button, Card } from 'react-bootstrap'
import { Navigate, useNavigate, NavLink } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const auth = localStorage.getItem('token')
    const n = 22
    if (!auth) {
        return (
            <Navigate to='/' />
        )
    }
    else {
        return (
            <div>
                <Navbar fixed='top' bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand>LOGO</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink style={{ textDecoration: 'none' }} to="/extra">Extra</NavLink>
                            </Nav>
                            <Button
                                variant='danger'
                                onClick={() => {
                                    localStorage.clear();
                                    console.log("logout");
                                    navigate('/')
                                }}
                            >logout
                            </Button>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
                <div style={{ marginTop: '5vh' }} >
                    <Container fluid style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

                        {[...Array(n)].map((i) => {
                            return (
                                <Card style={{ width: '18rem', margin: '16px' }}>
                                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                    </Container>
                </div>
            </div>
        )
    }
}

export default Home