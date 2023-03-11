import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//COMPONENTS
import Navbar from './components/navbar';
import Index from './components/index';
import Footer from './components/footer';

document.title='Dni otwarte'

const App =()=>{
  return(
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
