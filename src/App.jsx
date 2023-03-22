
import Header from './components/Header';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,   
}   
from 'react-router-dom'; 



import "./styles/style.scss"

import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';

import "./styles/colors.scss"
import "./styles/Header.scss"
import "./styles/Home.scss"
import "./styles/Contact.scss"
import "./styles/Footer.scss"

import "./styles/mediaquery.scss"

function App() {
  return (

    <Router>

  <Header/>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/About" element={<About/>}  />
    <Route path="/Contact" element={<Contact/>}  />


    </Routes>
    <Footer/>
     </Router>

  );
}

export default App;
