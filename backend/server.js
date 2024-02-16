import express, { application } from 'express'
import products from './data/products.js'
import productRoutes from './routes/productRoutes.js' 
import userRoutes from './routes/userRoutes.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { notFound, errorHandler } from './middleware/errorHandler.js'

dotenv.config()
import connectDB from './config/db.js'

connectDB()
const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }) )
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`app listening on port ${port || 3000}!`)

})
