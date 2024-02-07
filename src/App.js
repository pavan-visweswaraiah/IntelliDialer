
import './App.css';
import './assets/css/customStyle.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Route, Routes } from 'react-router-dom';
// pages
import Header from './components/Header';
import Home from './routes/Home';
import Features from './routes/Features';
import Pricing from './routes/Pricing';
import Partners from './routes/Partners';
import About from './routes/About'
import Contact from './routes/Contact'
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MoreConversations from './routes/MoreConversions';
import BetterOutComes from './routes/BetterOutcomes';
import IncreasedOpportunities from './routes/IncreasedOpportunities';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/features.html' element={<Features/>}/>
        <Route path='/pricing.html' element={<Pricing/>}/>
        <Route path='/partners-program.html' element={<Partners/>}/>
        <Route path='/about.html' element={<About/>}/>
        <Route path='/contact.html' element={<Contact/>} />
        <Route path='/more-conversions.html' element={<MoreConversations />} />
        <Route path='/better-outcomes.html' element={<BetterOutComes/>}/>
        <Route path='/increased-opportunities.html' element={<IncreasedOpportunities/>} />
      </Routes>
      <ScrollToTop />
      <Footer />
      
    </>
  );
}

export default App;
