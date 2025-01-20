import React from 'react';  
import { BrowserRouter as Router } from 'react-router-dom';  
import routes from './routes/index';
import Navbar from './components/Navbar';
import LoadingScreen from './components/templates/LoadingScreen';
import Footer from './components/Footer';
  
const App: React.FC = () => {  
  
  return (  
    <Router>
      <LoadingScreen />
      <Navbar />
      {routes}  
      <Footer />
    </Router>  
  );  
};  
  
export default App;  
