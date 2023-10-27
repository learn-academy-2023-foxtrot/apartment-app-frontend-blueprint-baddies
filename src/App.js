import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AptIndex from "./pages/AptIndex";
import AptShow from "./pages/AptShow";
import AptNew from "./pages/AptNew";
import AptEdit from "./pages/AptEdit";
import AptProtectedIndex from "./pages/AptProtectedIndex";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import mockUsers from "./mockUsers.js";
import mockApartments from "./mockApartments.js";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null)
  const [apartments, setApartments] = useState([])
  
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
  )
}

export default App;
