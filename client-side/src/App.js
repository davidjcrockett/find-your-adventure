import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavComponent from './components//general/Nav';
import Footer from './components/general/Footer';

import ListContextProvider from './contexts/ListContext';
import Home from './pages/Home';

import DetailsContextProvider from './contexts/GameDetailsContext';
import DetailsPage from './pages/DetailsPage';

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

            <Route 
            path={`/games/details/:id`} 
            element={
              <DetailsContextProvider>
                <DetailsPage />
              </DetailsContextProvider>
            }
            />

          </Routes>
        </Container>
      <Footer />
    </BrowserRouter>
  );
}



export default App;
