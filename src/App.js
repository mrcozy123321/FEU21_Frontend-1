import { Routes, Route } from 'react-router-dom';
import Form from './views/Form';
import Issues from './views/Issues'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/form' element={ <Form />} />
        <Route path='/issues' element={ <Issues />} />
      </Routes>
    </div>
  );
}

export default App;
