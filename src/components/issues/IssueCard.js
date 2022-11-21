import React from 'react'
import './IssueCard.css'
// Need to create cards with styling

const IssueCard = ({issue}) => {
  return (
    <div className='issue'>
      <div className='container'>
        <div className='issuecard'>
          <div className='issuecard-header'>
            <p id='issuecard-email' name='issuecard-email' className='issuecard-email'>{issue.email}</p>
            <div className='issuecard-status-container'>
              <p id='issuecard-status' name='issuecard-status'>{issue.status}</p>
              <div id='issuecard-status-ball' name='issuecard-status-ball' className='issuecard-status-ball issuecard-status-complete'></div>
            </div>
          </div>
          <div className='issuecard-body'>
          <p id='issuecard-subject' name='issuecard-subject' className='issuecard-subject'>{issue.subject}</p>
          <p id='issuecard-message' name='issuecard-message' className='issuecard-message'>{issue.message}</p>
          </div>
          <div className='issuecard-footer'>
            <p id='issuecard-time' name='issuecard-time' className='issuecard-time'>{issue.created}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IssueCard