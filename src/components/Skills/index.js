import Card from 'react-bootstrap/Card';
import "./index.scss";
import { Row, Col } from 'react-bootstrap';
import ItemSkill from '../ItemSkill';

const Skills = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          Skills
        </Card.Title>
        <Row>
          <Col>
            <div className='legend'>
              <div className='dot'>
                &nbsp;
              </div>
              Básico
            </div>
          </Col>
          <Col>
            <div className='legend'>
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
            <div className='legend'>
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
          <ItemSkill num={2} desc={"JavaScript"}/>
          <ItemSkill num={1} desc={"Banco de dados"}/>

        </Row>
      </Card.Body>
    </Card>
  );
}

export default Skills;