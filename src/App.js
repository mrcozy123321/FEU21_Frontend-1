import { Routes, Route } from 'react-router-dom';
import Form from './views/Form';
import Issues from './views/Issues';
import './App.css';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getIssues } from './store/actions/issuesActions';

function App() {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getIssues())
  }, [dispatch]);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={ <Form/> } />
        <Route path='/form' element={ <Form />} />
        <Route path='/issues' element={ <Issues />} />
      </Routes>
    </div>
  );
}

export default App;
