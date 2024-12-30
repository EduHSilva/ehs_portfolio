import { Row, Col, Badge, Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "./index.scss";

const projects = require('./projects.json');

const Projects = () => {
    return (
        <div className="container">
            <Row xs={1} md={1} className="g-4">
                {projects.map((p, index) => (
                    <Col key={index}>
                        <Card className='project'>
                            {p.imgs.length > 0 && (
                                <Carousel
                                    variant="dark"
                                    indicators={p.imgs.length > 1}
                                    controls={p.imgs.length > 1}
                                >
                                    {p.imgs.map((img, imgIndex) => (
                                        <Carousel.Item key={imgIndex}>
                                            <div className='container-img'>
                                                <Card.Img variant="top" src={img} />
                                            </div>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            )}
                            <Card.Body>
                                <Card.Title>{p.title}</Card.Title>
                                {p.tags.map((t, tagIndex) => (
                                    <Badge bg="secondary" key={tagIndex}>{t}</Badge>
                                ))}
                                <Card.Text>
                                    {p.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <button>
                                    <a rel="noreferrer" target="_blank" href={p.link}>Acessar</a>
                                </button>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Projects;
