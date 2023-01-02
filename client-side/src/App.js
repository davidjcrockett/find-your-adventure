import React from 'react';
import NavComponent from './components/Nav';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>        
      
      <NavComponent />
      
      <main>
        <Routes> 
          <Route path='/'>
          </Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}



export default App;
