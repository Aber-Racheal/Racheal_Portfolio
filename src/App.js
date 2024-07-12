import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import LandingPage from './Components/LandingPage/LandingPage';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <LandingPage/>
     <About/>
     <Services/>
     <Footer/>
    </div>
  );
}

export default App;
