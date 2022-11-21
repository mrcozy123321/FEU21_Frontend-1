import axios from 'axios';
import actiontypes from '../actiontypes';

export const getIssues = (id) => {
  return async dispatch => {
    dispatch({
      type: actiontypes().issues.getIssues
    })
    try {
      let res;
      res = await axios.get('https://localhost:7297/api/Issue')
      dispatch(getIssuesSuccess(res.data.issues))
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