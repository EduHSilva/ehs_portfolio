import { Row, Col } from 'react-bootstrap';

const ItemSkill = props => {
    let num = props.num;
    let desc = props.desc;
    const dots = []
    for (let i = 0; i < num; i++) {
        dots.push(<Dot />)
    }
    return <Row>
        <Col className='center justify-content-center' xs={4} >
            <span>
                {desc}
            </span>
        </Col>
        <Col xs={8}>
            <Row className='card-dots'>
                {dots}
            </Row>
        </Col>
    </Row>
}

const Dot = () => {
    return <div className='dot'>
        &nbsp;
    </div>
}

export default ItemSkill;