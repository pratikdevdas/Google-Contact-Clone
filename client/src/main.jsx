import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import {Provider} from'react-redux'
import { RouterProvider } from 'react-router-dom'
import store from './reducers/store'
import {router} from './RouteHandlers'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
