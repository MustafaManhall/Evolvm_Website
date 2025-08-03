import './Css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OurProjects from './Components/ourProjects';
import ContactUs from './Components/contactUs';
import NotFound from './Components/NotFound';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import React from 'react';
import Footer from './Components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <Router>

      <div className="App app-container">

        <NavBar />

        <div className="main-content">

          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/our-projects' element={<OurProjects />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </div>

        <Footer />

      </div>

    </Router>
  );

}

export default App;
