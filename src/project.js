import './App.css';

import { Line, Circle } from 'rc-progress';
import { Container, Navbar, Nav, Card, Image, Col, Row } from 'react-bootstrap';

function Projects() {
    return (
        <div>
            <Card className="m-auto shadow col-md-12 col-lg-12 m-auto pt-3 border-0 font-family-dancing p-4 bg-dark text-white mb-5">
                <Card.Text className='h1 text-center'>
                    Graduate Acadamic Projects
                </Card.Text>
                <Card.Text className='m-2'>

                    <Row>
                        <Col className='p-4 shadow' xs={6} sm={6} md={4} lg={4}>

                            <h3>Yelp Recommender System</h3>
                            <h4> August 2020-December 2020</h4>
                            <h5>Python, Scala, PySpark, Data Mining </h5>

                            <p className='text-justify '>
                                Built collaborative filtering recommender system on Yelp dataset for (user, business) pair in highly distributed environment.
                                Implemented SON and LSH algorithm to find frequent item sets and similar products respectively based on users ratings with 0.9
                                precision and 0.8 recall. Also created Yelp datastream with Bloom filtering and Flajolet-Martin algorithms.

                            </p>
                        </Col>
                        <Col xs={6} sm={6} md={4} lg={4} className='p-4 shadow'>
                            <h3>PokéBot</h3>
                            <h4>  May 2020 - December 2020</h4>
                            <h5>Python </h5>
                            <p className='text-justify '>Designed PokéBot Agent which chooses the best optimal move each turn, given the current state of both teams using Deep Q Reinforcement Learning.
                                The Agent trained with over 30,000 iterations has a win rate of 87% with Random Agent and Max Damage Agent and gives over 1446 Glicko-1 Estimate rating on the Showdown ladder board score when evaluated with Human players.
                                Built prediction model that predicts the next move using human replay’s data.

                            </p>
                        </Col>


                        <Col xs={6} sm={6} md={4} lg={4} className='p-4 shadow'>

                            <h3>Restaurant Application</h3>
                            <h4>May 2020-August 2020</h4>
                            <h5>ReactJS, NodeJS, MongoDB 			</h5>
                            <p className='text-justify '>Developed an innovative contactless dining solution that revolutionized the restaurant experience.
                                Enabled customers to place orders and make payments without any interaction, reducing wait times and streamlining operations.
                                Improved overall service quality and efficiency, resulting in enhanced customer satisfaction and increased revenue.
                                Addressed typical frustrations such as bill splitting, contributing to improved table turnover and customer retention.
                                Undertook development of app which increases payment turnover by 10% and reduces waiter’s job by 60%.
                            </p>

                        </Col>
                        <Col xs={6} sm={6} md={4} lg={4} className='p-4 shadow' >
                            <h3>Frontida Records </h3>
                            <h4>April 2020-August 2020</h4>
                            <h5>AngularJS, NodeJS, MongoDB, Auth0, Heroku</h5>
                            <p className='text-justify '> Devised and documented the dissemination strategy for Electronic Health Record (EHR) implementation, targeting refugees globally.
                                Designed and developed a scalable and fault-tolerant online portal benefiting over 850k refugees in Greece (May 2020), with planned expansion to assist refugees worldwide in subsequent phases.
                                Streamlined medical history reporting for health agencies during the COVID-19 pandemic, facilitating efficient healthcare management for refugees in crisis situations.
                            </p>

                        </Col>
                        <Col xs={6} sm={6} md={4} lg={4} className='p-4 shadow'>
                            <h3>NewsApp</h3>
                            <h4>                                                                        January 2020-May 2020</h4>
                            <h5>ReactJS, NodeJS, iOS Development, Swift, AWS, GCP, Azure                                                                       </h5>
                            <p className='text-justify '>Designed and developed a real-time web and iOS app featuring a diverse range of curated news from various media houses, tailored to user preferences.
                                Provided users with a personalized news briefing, allowing them to read full articles, bookmark interesting pieces, and share content on social media platforms.
                                Integrated weather reporting functionality, keeping users informed about current weather conditions seamlessly within the app.
                                Implemented an advanced search feature with auto-suggestions, making it easier for users to find relevant articles quickly and efficiently.
                                Incorporated a trending news section with visualizations, presenting the latest and most popular news topics in an engaging and visually appealing format.
                                Leveraged both web and iOS technologies to ensure a seamless and consistent user experience across platforms.
                                Received positive feedback from users for the app's user-friendly interface, personalized news updates, and added features enhancing the overall news consumption experience.
                            </p>
                        </Col>
                        <Col xs={6} sm={6} md={4} lg={4} className='p-4 shado'>
                            <h3>Personalized Speech Recognition for IOT </h3>
                            <h4> May 2016-May 2017</h4>
                            <h5>Android Application, Arduino/Raspberry Pi      </h5>
                            <p className='text-justify '> Coded prototype for affordable alternative to existing “Home automation” devices.
                                Engineered an android application to control home appliances (light, fan, etc) with specific speech/voice commands. Achieved accuracy off 94% .
                                Presented at International Conference on New Frontiers on Engineering, Management, Social Science and Education, Osmania University, Hyderabad, India.

                            </p>
                        </Col>
                    </Row>
                </Card.Text>
            </Card>
        </div>
    );
}

export default Projects;
