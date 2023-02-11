import { Container, Row, Col, Badge, Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "./index.scss"

const projects = require('./projects.json');
const Projects = () => {
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                {projects.map(p => (
                    <Col>
                        <Card className='project'>
                            <Carousel variant="dark">
                            {
                                p.imgs.map(img => 
                                    <Carousel.Item>
                                        <div className='container-img'>
                                        <Card.Img variant="top" src={img} />
                                        </div>
                                    </Carousel.Item>
                                )
                            }
                            </Carousel>
                            <Card.Body>
                                <Card.Title>{p.title}</Card.Title>
                                {
                                    p.tags.map(t => 
                                        <Badge bg="secondary">{t}</Badge>
                                    )
                                }
                                <Card.Text>
                                    {p.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <button>Acessar</button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
export default Projects;