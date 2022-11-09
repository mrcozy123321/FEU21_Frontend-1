import React from 'react'
import Navbar from '../components/navbar/Navbar'
import '../views/styles/Issues.css'
import IssueCard from '../components/issues/IssueCard'

// Need to create Issue card with styling and create a grid to display in Issues.js
const Issues = () => {
  return (
    <>
    <Navbar/>
    <div>
      <IssueCard></IssueCard>
    </div>
    </>
  )
}

export default Issues