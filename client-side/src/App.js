import React from 'react';
import NavComponent from './components/Nav';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <header>
      {''}<NavComponent />{''}
      </header>
      <main>
        {/* <Routes>
        <Route path='/' render={(routerProps) => {
       
        }} />
        </Routes> */}
      </main>
    </div>
  );
}



export default App;
