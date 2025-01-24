import React from 'react';  
import { BrowserRouter as Router } from 'react-router-dom';  
import routes from './routes/index';
import Navbar from './components/Navbar';
import LoadingScreen from './components/templates/LoadingScreen';
import Footer from './components/Footer';
import JerkyScroll from './components/JerkyScroll';
  
const App: React.FC = () => {  
  
  return (  
    <Router>
      <JerkyScroll >
      <LoadingScreen />
      <Navbar />
      {routes}  
      <Footer />
      </JerkyScroll>
    </Router>  
  );  
};  
  
export default App;  
