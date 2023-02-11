import Card from 'react-bootstrap/Card';
import "./index.scss";
import { Row, Col } from 'react-bootstrap';
import ItemSkill from '../ItemSkill';

const Skills = () => {
  return (
    <Card className='skills'>
      <Card.Body>
        <Card.Title>
          Skills
        </Card.Title>
        <Row>
          <Col>
            <div className='legend justify-content-center'>
              <div className='dot'>
                &nbsp;
              </div>
              Básico
            </div>
          </Col>
          <Col>
            <div className='legend justify-content-center'>
              <div className='dot'>
                &nbsp;
              </div>
              <div className='dot'>
                &nbsp;
              </div>
              Intermediário
            </div>
          </Col>
          <Col>
            <div className='legend justify-content-center'>
              <div className='dot'>
                &nbsp;
              </div>
              <div className='dot'>
                &nbsp;
              </div>
              <div className='dot'>
                &nbsp;
              </div>
              Avançado
            </div>
          </Col>
        </Row>
        <Row>
          <ItemSkill num={3} desc={"Java"}/>
          <ItemSkill num={3} desc={"SQL"}/>
          <ItemSkill num={2} desc={"JavaScript"}/>
          <ItemSkill num={2} desc={"Python"}/>
          <ItemSkill num={2} desc={"Inglês"}/>
          <ItemSkill num={2} desc={"Selenium"}/>
          <ItemSkill num={1} desc={"AWS"}/>
          <ItemSkill num={1} desc={"Docker"}/>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Skills;