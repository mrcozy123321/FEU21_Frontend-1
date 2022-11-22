import actiontypes from "../actiontypes";

const initState = {
  error: null,
  loading: false,
  data: []
}

const issuesReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().issues.getIssues: {
      return {
        ...state,
        loading: true
      }
    }
    case actiontypes().issues.getIssuesSuccess: {
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      }
    }

    case actiontypes().issues.getIssuesFailure: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }

    default:
      return state
  }
}

export default issuesReducer;