import { useState } from 'react';
import { Row, Col, Badge, Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "./index.scss";

const projects = require('./projects.json');

const Projects = () => {
    const [selectedTag, setSelectedTag] = useState('');

    const allTags = [...new Set(projects.flatMap((p) => p.tags))];

    const filteredProjects = selectedTag 
        ? projects.filter((p) => p.tags.includes(selectedTag)) 
        : projects;

    return (
        <div className="container-content">
            <div className="tag-filter">
                <Badge
                    bg={selectedTag === '' ? 'primary' : 'dark'}
                    onClick={() => setSelectedTag('')}
                    className="tag"
                >
                    Todos
                </Badge>
                {allTags.map((tag, index) => (
                    <Badge
                        key={index}
                        bg={selectedTag === tag ? 'primary' : 'dark'}
                        onClick={() => setSelectedTag(tag)}
                        className="tag"
                    >
                        {tag}
                    </Badge>
                ))}
            </div>

            {/* Lista de Projetos */}
            <Row xs={1} md={1} className="g-4">
                {filteredProjects.map((p, index) => (
                    <Col key={index}>
                        <Card className="project">
                            {(p.imgs.length > 0 || p.videos?.length > 0) && (
                                <Carousel
                                    variant="dark"
                                    indicators={p.imgs.length + (p.videos?.length || 0) > 1}
                                    controls={p.imgs.length + (p.videos?.length || 0) > 1}
                                >
                                    {p.imgs.map((img, imgIndex) => (
                                        <Carousel.Item key={`img-${imgIndex}`}>
                                            <div className="container-img">
                                                <Card.Img variant="top" src={img} />
                                            </div>
                                        </Carousel.Item>
                                    ))}
                                    {p.videos?.map((video, videoIndex) => (
                                        <Carousel.Item key={`video-${videoIndex}`}>
                                            <div className="container-video">
                                                <iframe
                                                    src={video}
                                                    title={`Video-${videoIndex}`}
                                                    frameBorder="0"
                                                    allow="autoplay; fullscreen"
                                                    allowFullScreen
                                                />
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
                                <Card.Text>{p.description}</Card.Text>
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
