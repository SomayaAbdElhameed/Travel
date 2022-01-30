
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import component
import Home from './Pages/Home/Home';
import Aboutus from './Pages/Aboutus/Aboutus';
import Offers from './Pages/Offers/Offers';
// import Products from'./Api/Products';
import News from './Pages/News/News';
import Contact  from'./Pages/Contact/Contact';
function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar />
     <Header/>
     

     <Routes>
       <Route path="/" exact element={<Home />}/>
       <Route path="/aboutus" exact element={<Aboutus/>}/>
       <Route path="/offers" exact element={<Offers />}/>
       {/* <Route path="/products" exact element={<Products />}/> */}
       <Route path="/news" exact element={<News />}/>
       <Route path="/contact" exact element={<Contact />}/>

       
     </Routes>
     </BrowserRouter>
     <Footer/>

    </>
);
}

export default App;














