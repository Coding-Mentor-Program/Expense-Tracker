import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../../routes/LandingPage/LandingPage';
import Expenses from '../Expenses/Expenses';

class App extends React.Component {
  render(){
    return (
      <div className='App'>
        <Routes>
          <Route exact path={'/'} element={<LandingPage />} />
          <Route exact path={'/expenses'} element={<Expenses />} />
        </Routes>
      </div>
    );  
  }
}

export default App;