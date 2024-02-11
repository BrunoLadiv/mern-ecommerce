import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { useGetProductsQuery } from '../slices/productsApiSlice'
export default function HomeScreen() {
  const { data: products, isLoading, isError, error } = useGetProductsQuery()
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    console.log(error.data.message)
    return <h1>Something went wrong</h1>
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
