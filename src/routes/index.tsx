import { Routes, Route } from 'react-router-dom';  
import HomePage from '../pages/HomePage';  
import AboutPage from '../pages/AboutPage';  
import WorkPage from '../pages/WorkPage';  
import CaseStudyPage from '../pages/CaseStudyPage';
  
const routes = (  
  <Routes>  
    <Route path="/" element={<HomePage />} />  
    <Route path="/about" element={<AboutPage />} />  
    <Route path="/work" element={<WorkPage />} />  
    <Route path="/work/:id" element={<CaseStudyPage />} />  
  </Routes>  
);  
  
export default routes;  
