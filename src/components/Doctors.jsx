import { Col, Row } from "react-bootstrap"
import Container from "react-bootstrap/Container"

const Doctors = ({doctors}) => {
  return (
    <Container className="p-2">
      <h3 className="display-6" style={{ color: "rgb(166, 18, 189)" }}> Our Doctors</h3>

      <Row>
        {doctors.map((dr)=>(
           <Col>
       <img src={dr.img}/>
       <h4>{dr.name}</h4>
       <h5>{dr.dep}</h5>
        </Col>
        ))}
       
      </Row>
    </Container>
  )
}

export default Doctors
