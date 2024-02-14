import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'
export default function HomeScreen() {
  const { data: products, isLoading, isError, error } = useGetProductsQuery()
  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    return (
      <Message variant="danger">
        Something went wrong {error.data.message}
      </Message>
    )
  }
  //   console.log(products)
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products &&
          products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            )
          })}
      </Row>
    </>
  )
}
