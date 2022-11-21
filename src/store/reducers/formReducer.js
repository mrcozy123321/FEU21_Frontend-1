import actiontypes from "../actiontypes";

const initState = {
  error: null,
  loading: false,
  id: null,
  email: null,
  subject: null,
  message: null,
  statusId: null,
  created: null
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
        id: action.payload.id,
        email: action.payload.email,
        subject: action.payload.subject,
        message: action.payload.message,
        statusId: action.payload.statusId,
        created: action.payload.created
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