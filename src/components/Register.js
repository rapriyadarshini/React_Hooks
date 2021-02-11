import React, { useState } from 'react'



const Register = props => {
  
  const initialState = { id: null, Name: '', Email: '', Mobile: '' }
  const [register, setRegister] = useState(initialState)

  const handleInputChange = event => {
		const { name, value } = event.target

		setRegister({ ...register, [name]: value })
  }
  
  return (
    <form onSubmit={event => {
      event.preventDefault()
      if (!register.Name  || !register.Email || !register.Mobile) return

      props.register(register)
      setRegister(initialState)
    }}>
      <input type="text" name="Name" placeholder="Enter Name" value={register.Name} onChange={handleInputChange} />
      <input type="text" name="Email" placeholder="Enter Mail id" value={register.Email} onChange={handleInputChange} />
      <input type="text" name="Mobile" placeholder="Enter Mobile number" value={register.Mobile} onChange={handleInputChange}/>  
      <button> Register </button>
    </form>
  )
}

export default Register