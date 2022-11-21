import axios from 'axios';
import actiontypes from '../actiontypes';

export const createIssue = (payload) => {
  return async dispatch => {
    dispatch({
      type: actiontypes().form.createIssue
    })
    try {
      const res = await axios.post('https://localhost:7297/api/Issue', payload.form)
      dispatch(createIssueSuccess(res.data))
    } 
    catch (err) {
      dispatch(createIssueFailure)
    }
  }
}

const createIssueSuccess = () => {
  return {
    type: actiontypes().form.createIssueSuccess,
    payload: null
  }
}

const createIssueFailure = (err) => {
  return {
    type: actiontypes().form.createIssueFailure,
    payload: err
  }
}