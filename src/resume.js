import './App.css';
import { Component } from 'react';
import { Container, Navbar, Nav, Card, Button, Image, Col, Row } from 'react-bootstrap';
import { PiGithubLogoFill, PiNumberFourBold } from 'react-icons/pi';
import { RiLinkedinFill } from 'react-icons/ri';
import my from './my.png';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import Navigation from './navigation';
import React from 'react';
function Resume() {
    return (
        <div className='height row w-100 '>


            <Card className="  col-md-11 col-lg-11 m-auto bg-dark text-light">
                <Card.Body className='row'>
                    <Col className=' rounded p-0 my-auto ' xs={10} sm={4} md={4} lg={4}>
                        <div className='text-center '>
                            <Image variant="top" className="m-auto w-75  img-fluid" roundedCircle src={my} />
                        </div>

                        <br></br>

                    </Col>
                    <Col className=' text-justify p-4 m-auto h-100' xs={10} sm={8} md={8} lg={8}>

                        <Card.Text className='h1 font-family-dancing text-center'>
                            Hi!
                        </Card.Text>
                        <Card.Text className='h2 font-family-dancing text-center'>
                            I am Aishwarya
                        </Card.Text>
                        <Card.Text className='h2 font-family-dancing text-center'>
                            &
                        </Card.Text>

                        <Card.Text className='h2 font-family-dancing text-center mb-3'>
                            I code cool websites!
                        </Card.Text>

                        <Card.Text className='font-family-dancing mt-2 text-justify'>
                            I  am a highly motivated and accomplished IT professional with a Master of Computer Science from the University of Southern California.
                            With over 3 years of experience as a software developer at top companies such as Oracle and Goldman Sachs, I bring a wealth of technical knowledge and expertise to the table.
                            In my free time, I enjoy learning about the latest technologies and collaborating with like-minded individuals.
                            Passionate about software development, I am eager to connect with and learn from other tech enthusiasts.

                        </Card.Text>
                        <Card.Text className='font-family-dancing mt-2 text-justify'>



                        </Card.Text>
                        <div className='my-4 d-flex justify-content-center'>
                            <a href="#contact" className='opacity-100' ref={React.createRef()}> <Button variant="outline-light me-2"> Contact Me </Button></a>
                            <a href="AM_Resume.pdf" className='opacity-100' download><Button variant="outline-light">Resume  <FaCloudDownloadAlt ></FaCloudDownloadAlt></Button> </a>
                        </div>

                    </Col>
                </Card.Body>
            </Card>


        </div>
    );
}

export default Resume;
