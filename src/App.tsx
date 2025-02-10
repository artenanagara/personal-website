import React from 'react';  
import { BrowserRouter as Router } from 'react-router-dom';  
import routes from './routes/index';
import Navbar from './components/layouts/Navbar';
import LoadingScreen from './components/animations/LoadingScreen';
import Footer from './components/layouts/Footer';
import ScrollToTop from './components/animations/ScrollToTop';
  
const App: React.FC = () => {  
  
  return (  
    <Router>
      <LoadingScreen />
      <ScrollToTop />
      <Navbar />
      {routes}  
      <Footer />
    </Router>  
  );  
};  
  
export default App;  
