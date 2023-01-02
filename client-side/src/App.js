import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NavComponent from './components/Nav';
import Footer from './components/Footer';
import ListContextProvider from './contexts/ListContext';
import Home from './pages/Home';

function App() {
  return (
    <div>        
      
      <NavComponent />
      
      <main>
        <Routes> 
          <Route 
          path='/' 
          element={
            <ListContextProvider>
              <Home />
            </ListContextProvider>
          }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}



export default App;
