import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/esm/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-400-color mt-5">
                <Container className="py-5">
                    <Row>
                        <Col sm={12} md={4} className="text-center text-md-start mb-5 mb-md-0">
                            <h3 as={Link} to={'/'} className="fs-2 fw-bold mb-3">Hekto</h3>
                            <span className="d-block text-gray-100-color font-lato font-lato">Contact Info</span>
                            <span className="text-gray-100-color font-lato font-lato">Basant Lok, Vasant Vihar, New Delhi, India</span>
                        </Col>
                        <Col sm={12} md={2} className="text-center text-md-start mb-5 mb-md-0">
                            <h6 className="text-dark font-22 mb-4">Catagories</h6>
                            <ListGroup as="ul">
                                <ListGroup.Item as={Link} to={"/products"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Sofas</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/products"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Beds</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/products"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Wardrobes</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/products"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Dressing Tables</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/products"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Dining Tables</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/products"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Study Tables</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/products"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Chairs</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/products"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">TV and Media Units</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={12} md={2} className="text-center text-md-start mb-5 mb-md-0">
                            <h6 className="text-dark font-22 mb-4">Customer Care</h6>
                            <ListGroup as="ul">
                                <ListGroup.Item as={Link} to={"/account"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">My Account</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Discount</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/orders"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Orders History</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={12} md="auto" className="text-center text-md-start">
                            <h6 className="text-dark font-22 mb-4">Pages</h6>
                            <ListGroup as="ul">
                                <ListGroup.Item as={Link} to={"/"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Blog</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Browse the Shop</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Category</span>
                                </ListGroup.Item>
                                <ListGroup.Item as={Link} to={"/"} className="border-0 bg-transparent p-0 mb-2">
                                    <span className="text-gray-100-color font-lato">Pre-Built Pages</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </footer>

            <footer className="footer-social-media bg-gray-600-color py-3">
                <Container>
                    <Stack className="flex-column flex-md-row justify-content-between align-items-center">
                        <span className="font-lato font-semibold text-gray-100-color mb-3 mb-md-0">&copy;Webecy - All Rights Reserved</span>
                        <Stack direction="horizontal" className="justify-content-center">
                            <img src={process.env.PUBLIC_URL + "/assets/style/fb-icon.svg"} alt="fb-icon" className="me-2" />
                            <img src={process.env.PUBLIC_URL + "/assets/style/insta-icon.svg"} alt="insta-icon" className="me-2" />
                            <img src={process.env.PUBLIC_URL + "/assets/style/tweet-icon.svg"} alt="tweet-icon" />
                        </Stack>
                    </Stack>
                </Container>
            </footer>
        </>
    )
}

export default Footer
