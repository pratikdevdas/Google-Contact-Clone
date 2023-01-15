import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Contacts = () => {

	const contacts = useSelector(state=> state.contact)
		const cn = contacts.map(c=> c.contact)
  return (
	<div>
		{cn.map((c,i)=><li key={i}>{c.firstName} ls {c.lastName} pn {c.phone}</li>)
		}
	</div>
  )
}

export default Contacts