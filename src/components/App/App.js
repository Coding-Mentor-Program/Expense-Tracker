import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../../routes/LandingPage/LandingPage';

class App extends React.Component {
  render(){
    return (
      <div className='App'>
        <Routes>
          <Route exact path={'/'} element={<LandingPage />} />
        </Routes>
      </div>
    );  
  }
}

export default App;