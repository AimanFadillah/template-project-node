import { Col, Container, Row } from "./Grid";

export default function Loading(props) {
    return <Container>
        <Row justify="center" >
            <Col pc="12" className="d-flex justify-content-center mt-5" >
                <div className={`spinner-border text-primary ${props.className}`}  style={{width:"3rem",height:"3rem"}} role="status"></div>
            </Col>
        </Row>
    </Container>
}