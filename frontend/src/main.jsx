import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/index.css'
import ProductScreen from './screens/ProductScreen.jsx'
import CartScreen from './screens/CartScreen.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen.jsx'
import LoginScreen from './screens/LoginScreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen/>} />
      <Route path="/login" element={<LoginScreen/>} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
