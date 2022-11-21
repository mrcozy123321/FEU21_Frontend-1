import React from 'react'
import { getIssues } from '../../store/actions/issuesActions';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './IssuesList.css'
import IssueCard from './IssueCard';

const IssuesList = () => {
  
  const { loading, error, data: issues } = useSelector(state => state.issuesReducer)

  return (
    <>
      { loading && 'loading..'}
      { error && <p>error</p> }
      <div className='issues'>
        <div className='container'>
          { issues.map(issue => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      </div>
    </>
  )
}

export default IssuesList;