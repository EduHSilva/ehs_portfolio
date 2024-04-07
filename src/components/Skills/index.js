import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ItemSkill from "../ItemSkill";
import "./index.scss";

const Skills = () => {
  return (
    <Card className="skills">
      <Card.Body>
        <Card.Title>Skills</Card.Title>
        <Row>
          <Col>
            <div className="legend justify-content-center">
              <div className="dot">&nbsp;</div>
              Básico
            </div>
          </Col>
          <Col>
            <div className="legend justify-content-center">
              <div className="dot">&nbsp;</div>
              <div className="dot">&nbsp;</div>
              <div className="dot">&nbsp;</div>
              Intermediário
            </div>
          </Col>
          <Col>
            <div className="legend justify-content-center">
              <div className="dot">&nbsp;</div>
              <div className="dot">&nbsp;</div>
              <div className="dot">&nbsp;</div>
              <div className="dot">&nbsp;</div>
              <div className="dot">&nbsp;</div>
              Avançado
            </div>
          </Col>
        </Row>
        <Row>
          <ItemSkill num={5} desc={"Java"} />
          <ItemSkill num={4} desc={"SQL"} />
          <ItemSkill num={4} desc={"JavaScript"} />
          <ItemSkill num={4} desc={"Python"} />
          <ItemSkill num={3} desc={"Inglês"} />
          <ItemSkill num={3} desc={"Selenium"} />
          <ItemSkill num={1} desc={"AWS"} />
          <ItemSkill num={1} desc={"Docker"} />
          <ItemSkill num={1} desc={"Apache Spark"} />
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Skills;
