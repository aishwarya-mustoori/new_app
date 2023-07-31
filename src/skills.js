import './App.css';

import { Line, Circle } from 'rc-progress';
import { Container, Navbar, Nav, Card, Button, Image, Col, Row } from 'react-bootstrap';
import webIcon from "./webIcon.png";
import programmingIcon from "./programmingIcon.png";
import automationIcon from './automationIcon.png';
import databaseIcon from './databaseIcon.png';
import certIcon from "./certIcon.png"
import cloudIcon from "./cloudIcon.png"
function Skills() {
    return (
        <div>
            <Card className="m-auto shadow col-md-12 col-lg-12 m-auto pt-3 border-0 font-family-dancing p-4 bg-dark text-white">
                <Card.Text className='h1 text-center'>
                    Skills
                </Card.Text>
                <Card.Text className='m-2'>

                    <Row>
                        <Col className='p-4 shadow' xs={6} sm={4} md={4} lg={4}>


                            <Image src={webIcon} roundedCircle className="m-auto w-50 bg-dark  img-fluid" />
                            <div className='text-center h4'>Web Development</div>
                            <br></br>
                            <Row>
                                <Col xs={4}> HTML </Col><Col>   <Line percent={100} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> CSS </Col><Col>   <Line percent={100} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> XML </Col><Col>   <Line percent={100} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>

                            <Row>
                                <Col xs={4}> Javascript </Col><Col>   <Line percent={60} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> Typescript </Col><Col>   <Line percent={60} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> REST Services </Col><Col>   <Line percent={60} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> ReactJS </Col><Col>   <Line percent={60} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> JQuery </Col><Col>   <Line percent={30} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> Ajax </Col><Col>   <Line percent={30} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> PHP </Col><Col>   <Line percent={30} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>

                            <Row>
                                <Col xs={4}> AngularJS </Col><Col>   <Line percent={20} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> NodeJS </Col><Col>   <Line percent={20} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>

                            <Row>
                                <Col xs={4}> ExpressJS </Col><Col>   <Line percent={20} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>

                            <Row>
                                <Col xs={4}> ExpressJS </Col><Col>   <Line percent={20} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> ReactNative </Col><Col>   <Line percent={20} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> IOS Dev </Col><Col>   <Line percent={20} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> Android Dev </Col><Col>   <Line percent={20} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> Spring </Col><Col>   <Line percent={30} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>


                        </Col>
                        <Col xs={6} sm={4} md={4} lg={4} className='p-4 shadow'>
                            <Image src={programmingIcon} roundedCircle className="m-auto w-50  bg-dark  img-fluid" />

                            <div className='text-center h4'>Programming Languages</div>

                            <br></br>
                            <Row>
                                <Col xs={4}> Java </Col><Col>   <Line percent={80} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> Python </Col><Col>   <Line percent={80} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> C++ </Col><Col>   <Line percent={30} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> C </Col><Col>   <Line percent={30} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> Swift </Col><Col>   <Line percent={30} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> Scala </Col><Col>   <Line percent={30} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                        </Col>


                        <Col xs={6} sm={4} md={4} lg={4} className='p-4 shadow'>
                            <Image src={cloudIcon} roundedCircle className="m-auto w-50 bg-dark  img-fluid" />

                            <div className='text-center h4'>Cloud Technologies / Deployment</div>
                            <br />
                            <Row>
                                <Col xs={4}> AWS </Col><Col>   <Line percent={40} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> GCP </Col><Col>   <Line percent={20} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> Azure </Col><Col>   <Line percent={20} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> Heroku </Col><Col>   <Line percent={20} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> Docker </Col><Col>   <Line percent={20} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>


                        </Col>
                        <Col xs={6} sm={4} md={4} lg={4} className='p-4 shadow' >
                            <Image src={automationIcon} roundedCircle className="m-auto w-50 bg-dark  img-fluid" />

                            <div className='text-center h4'>Testing/ Automation</div>
                            <br></br>
                            <Row>
                                <Row>
                                    <Col xs={4}> CI/CD </Col><Col>   <Line percent={40} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                                </Row>
                                <Col xs={4}> JUnit </Col><Col>   <Line percent={60} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> TestNG </Col><Col>   <Line percent={20} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> Selinium </Col><Col>   <Line percent={20} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> Terraform </Col><Col>   <Line percent={20} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>

                        </Col>
                        <Col xs={6} sm={4} md={4} lg={4} className='p-4 shadow'>
                            <Image src={databaseIcon} roundedCircle className="m-auto w-50 bg-dark  img-fluid pb-3" />

                            <div className='text-center h4'> Data Related Technologies</div>

                            <br></br>
                            <Row>
                                <Col xs={4}> SQL </Col><Col>   <Line percent={60} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> MongoDB </Col><Col>   <Line percent={40} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> MySQL </Col><Col>   <Line percent={20} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> Hadoop </Col><Col>   <Line percent={60} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> Spark </Col><Col>   <Line percent={60} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> Flink </Col><Col>   <Line percent={60} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                            <Row>
                                <Col xs={4}> Avro </Col><Col>   <Line percent={60} strokeWidth={4} strokeColor="#D3D3D3" /></Col>
                            </Row>
                        </Col>
                        <Col xs={6} sm={4} md={4} lg={4} className='p-4 shado'>
                            <Image src={certIcon} roundedCircle className="m-auto w-50 bg-dark  img-fluid" />

                            <div className='text-center h4'> Certifications </div>

                            <Row>
                                <Col > Java SE 6 </Col>
                            </Row>
                            <Row>
                                <Col> Pega System Architect </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Text>
            </Card>
        </div>
    );
}

export default Skills;
