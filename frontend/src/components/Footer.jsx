import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p>Mern Ecommerce &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
