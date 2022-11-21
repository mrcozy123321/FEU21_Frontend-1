import React from 'react';
import Navbar from '../components/navbar/Navbar';
// import '../views/styles/Issues.css';
import IssuesList from '../components/issues/IssuesList';


const Issues = () => {
  
  // const dispatch = useDispatch();
  // const [newIssue, setNewIssue] = useState({});

  // useEffect(() => {
  //   dispatch
  // })


  return (
    <>
    <Navbar/>
    <div className='issues'>
      <div className='container'>
        <IssuesList/>
      </div>
    </div>
    </>
  )
}

export default Issues