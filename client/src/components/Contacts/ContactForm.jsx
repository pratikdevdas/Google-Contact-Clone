import React from 'react'
import { useDispatch } from 'react-redux'

const ContactForm = () => {

	const handleSubmit = ()=>{
		console.log('submit')
	}
  return (
	<div>
		<form onSubmit={handleSubmit}>
			image

			<input type="text" placeholder='First name'/>
			<input type="text" placeholder='Last Name'/>
			<input type="text" placeholder='Job Title'/>
			<input type="email" placeholder='Email'/>
			<input type="email" placeholder='Email'/>
		</form>
	</div>
  )
}

export default ContactForm