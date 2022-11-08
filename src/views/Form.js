import React from 'react'
import Navbar from '../components/navbar/Navbar'
import '../views/styles/Form.css'

const Form = () => {
  return (
    <>
    <Navbar/>
    <form className='container'>
      <div className='d-flex'>
      <label>Email:</label>
      <input type="email" id='email' name='email' className='form-email form-control' placeholder='Ex. John.Doe@mail.com'></input>
      <label>Subject:</label>
      <input type="text" id='subject' name='subject' className='form-subject form-control' placeholder='Write an issue...'></input>
      <label>Message:</label>
      <textarea type="textarea" id='message' name='message' className='form-message form-control' placeholder='Explain issue in greater detail...'></textarea>
      <button id='btn-submit' name='btn-submit' className='btn btn-primary'>Submit</button>
      </div>
    </form>
    </>
  )
}

export default Form