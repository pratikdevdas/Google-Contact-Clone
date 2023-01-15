import {createBrowserRouter } from 'react-router-dom'
import Home from './Page/Home'
import ContactPage from './Page/ContactPage'
import ContactForm from './components/Contacts/ContactForm'

export const router = createBrowserRouter([
	{
	  path: "/",
	  element: <Home />,
	  children:[
		{
		  path: "contacts",
		  element: <ContactPage/>
		},
		{
		  path: "contacts/form",
		  element: <ContactForm/>
		}
  
	  ],
	},
  
  ]
  )

