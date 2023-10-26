import React, { useState } from 'react'
import './App.css';
import mockUsers from './mockUsers';
import mockApartments from './mockApartments';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AptIndex from './pages/AptIndex';
import AptProtectedIndex from './pages/AptProtectedIndex';
import AptShow from './pages/AptShow';
import AptNew from './pages/AptNew';
import AptEdit from './pages/AptEdit';
import NotFound from './pages/NotFound';

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartment, setApartment] = useState(mockApartments)
  return (
   <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/aptindex' element={<AptIndex />}/>
        <Route path='/aptshow' element={<AptShow />}/>
        <Route path='/aptnew' element={<AptNew />}/>
        <Route path='/aptedit' element={<AptEdit />}/>
        <Route path='/aptprotectedindex' element={<AptProtectedIndex />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    <Footer />
   </>
  );
}

export default App;
