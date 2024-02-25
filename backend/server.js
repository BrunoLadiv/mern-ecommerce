import path from 'path'
import express, { application } from 'express'
import products from './data/products.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { notFound, errorHandler } from './middleware/errorHandler.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()
import connectDB from './config/db.js'

connectDB()
const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use ('/api/upload', uploadRoutes)
app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
)
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads') ))

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`app listening on port ${port || 3000}!`)
})
