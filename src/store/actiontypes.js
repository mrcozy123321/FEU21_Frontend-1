const actiontypes = () => {
  return {
    issues: {
      getIssues: 'GET_ISSUES',
      getIssuesSuccess: 'GET_ISSUES_SUCCESS',
      getIssuesFailure: 'GET_ISSUES_FAILURE'
    },
    form: {
      createIssue: 'CREATE_ISSUE',
      createIssueSuccess: 'CREATE_ISSUE_SUCCESS',
      createIssueFailure: 'CREATE_ISSUE_FAILURE'
    }
  }
}

export default actiontypes