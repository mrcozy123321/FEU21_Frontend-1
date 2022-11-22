import axios from 'axios';
import actiontypes from '../actiontypes';

const apiCall = (url, issue, dispatch) => {
  axios.post(url, issue)
  .then(res => {
    console.log(res.data)
    dispatch(createIssueSuccess(res.data))
  })
  .catch(err => dispatch(createIssueFailure(err.message)))
}

export const createIssue = (issue) => {
  return dispatch => {
    apiCall('https://localhost:7297/api/Issue', issue, dispatch)
  }
}

// export const createIssue = (payload) => {
//   return async dispatch => {
//     dispatch({
//       type: actiontypes().form.createIssue
//     })
//     try {
//       const res = await axios.post('https://localhost:7297/api/Issue', payload.form)
//       dispatch(createIssueSuccess(res.data))
//     } 
//     catch (err) {
//       dispatch(createIssueFailure)
//     }
//   }
// }

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