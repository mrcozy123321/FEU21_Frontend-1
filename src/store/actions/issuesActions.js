import axios from 'axios';
import actiontypes from '../actiontypes';

export const getIssues = (id) => {
  return async dispatch => {
    dispatch({
      type: actiontypes().issues.getIssues
    })
    try {
      const res = await axios.get('https://localhost:7297/api/Issue')
      dispatch(getIssuesSuccess(res.data))
      console.log(res.data, 'Faaaan')
    }
    catch (err) {
      dispatch(getIssuesFailure(err.message))
    }
  }
}

const getIssuesSuccess = (issues) => {
  return {
    type: actiontypes().issues.getIssuesSuccess,
    payload: issues
  }
}

const getIssuesFailure = (err) => {
  return {
    type: actiontypes().issues.getIssuesFailure,
    payload: err
  }
}