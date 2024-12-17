import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/footer';
import {Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import Contacts from './pages/contacts/contacts';
import Aboutus from './pages/aboutus/aboutus';
import Undefined from './pages/undefined/Undefined';
import Purschase from './pages/purschase/purschase';
import Services from './pages/services/services';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/purschase" element={<Purschase/>} />
        <Route path='/services' element={<Services/>} />
        <Route path="*" element={<Undefined/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;