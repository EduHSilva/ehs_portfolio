import { Col, Row } from "react-bootstrap";

const ItemSkill = (props) => {
  let num = props.num;
  let desc = props.desc;
  const dots = [];
  for (let i = 0; i < num; i++) {
    dots.push(<Dot />);
  }
  return (
    <Row>
      <hr />
      <Col className="center" xs={5}>
        <span>{desc}</span>
      </Col>
      <Col xs={6} className="align-content-center">
        <Row className="card-dots">{dots}</Row>
      </Col>
    </Row>
  );
};

const Dot = () => {
  return <div className="dot">&nbsp;</div>;
};

export default ItemSkill;
