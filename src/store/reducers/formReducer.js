import actiontypes from "../actiontypes";

const initState = {
  error: null,
  loading: false,
  email: null,
  subject: null,
  message: null,
  statusId: null,
}

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().form.createIssue:
      return {
        ...state,
        loading: true
      }

    case actiontypes().form.createIssueSuccess:
      return {
        ...state,
        loading: false,
        email: action.payload.email,
        subject: action.payload.subject,
        message: action.payload.message,
        statusId: action.payload.statusId,
      }
    
    case actiontypes().form.createIssueFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default formReducer;