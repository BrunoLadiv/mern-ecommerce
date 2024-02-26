import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { useGetProductsQuery } from '../slices/productsApiSlice'
import Loader from '../components/Loader'
import { useParams } from 'react-router-dom'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
export default function HomeScreen() {
  const { pageNumber, keyword } = useParams()
  const { data, isLoading, isError, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  })
  if (isLoading) {
    return <Loader />
  }
  if (isError) {
    return (
      <Message variant="danger">Something went wrong {error.message}</Message>
    )
  }
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {data.products &&
          data.products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            )
          })}
      </Row>
      <Paginate
        pages={data.pages}
        page={data.page}
        keyword={keyword ? keyword : ''}
      />
    </>
  )
}
