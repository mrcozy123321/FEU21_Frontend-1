import React from 'react'
import './IssueCard.css'
// Need to create cards with styling

const IssueCard = () => {
  return (
    <div className='issue'>
      <div className='container'>
        <div className='issuecard'>
          <div className='issuecard-header'>
            <p id='issuecard-email' name='issuecard-email' className='issuecard-email'>John.Doe@mail.com</p>
            <div className='issuecard-status-container'>
              <p id='issuecard-status' name='issuecard-status'>Status</p>
              <div id='issuecard-status-ball' name='issuecard-status-ball' className='issuecard-status-ball issuecard-status-complete'></div>
            </div>
          </div>
          <p id='issuecard-subject' name='issuecard-subject' className='issuecard-subject'>Subject for something random to talk about</p>
          <p id='issuecard-message' name='issuecard-message' className='issuecard-message'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, natus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, natus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, natus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, natus.</p>
        </div>
      </div>
    </div>
  )
}

export default IssueCard