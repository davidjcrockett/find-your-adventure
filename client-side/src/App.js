import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavComponent from './components/Nav';
import Footer from './components/Footer';
import ListContextProvider from './contexts/ListContext';
import Home from './pages/Home';
import './App.css';

function App() {
  return (    
    <BrowserRouter>
      <NavComponent />
        <Container fluid='lg'>
          <Routes> 
            <Route 
            exact path='/' 
            element={
              <ListContextProvider>
                <Home />
              </ListContextProvider>
            }
            />
          </Routes>
        </Container>
      <Footer />
    </BrowserRouter>
  );
}



export default App;
