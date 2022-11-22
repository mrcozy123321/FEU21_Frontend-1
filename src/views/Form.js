import React from 'react';
import Navbar from '../components/navbar/Navbar';
import '../views/styles/Form.css';
import { createIssue } from '../store/actions/formActions';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Form = () => {
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.formReducer);

  const [issueEmail, setIssueEmail] = useState('');
  const [issueSubject, setIssueSubject] = useState('');
  const [issueMessage, setIssueMessage] = useState('');
  // const [issueCreated, setIssueCreated] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(createIssue({
      email: issueEmail,
      subject: issueSubject,
      message: issueMessage,
      statusId: 1,
    }))
  }

  return (
    <>
    <Navbar/>
    <form className='container' onSubmit={handleSubmit}>
      <div className='d-flex'>
        <label>Email:</label>
        <input type="email" id='email' name='email' className='form-email form-control' placeholder='Ex. John.Doe@mail.com' onChange={e => setIssueEmail(e.target.value)} ></input>
        <label>Subject:</label>
        <input type="text" id='subject' name='subject' className='form-subject form-control' placeholder='Write an issue...' onChange={e => setIssueSubject(e.target.value)} ></input>
        <label>Message:</label>
        <textarea type="textarea" id='message' name='message' className='form-message form-control' placeholder='Explain issue in greater detail...' onChange={e => setIssueMessage(e.target.value)} ></textarea>
        <button type='submit' id='btn-submit' name='btn-submit' className='btn btn-primary'>Submit</button>
      </div>
    </form>
    </>
  )
}

export default Form