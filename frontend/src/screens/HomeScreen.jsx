import { Row, Col } from 'react-bootstrap'
import products from '../products'

export default function HomeScreen() {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <h3>{product.name}</h3>
            </Col>
          )
        })}
      </Row>
    </>
  )
}
