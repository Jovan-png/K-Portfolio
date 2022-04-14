import  React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Gallery from './components/pages/Gallery';
import Music from './components/pages/Music';
import About from './components/pages/About';

function App() {

  const [active, setActive] = useState(false)

  const [currentPage, handlePageChange] = useState('About');

useEffect(()=>{
  document.title = currentPage
})

  const renderPage = () =>{
    switch (currentPage){
      case "About":
  return <About></About>;
case "Gallery":
  return <Gallery></Gallery>;
  case "Music":
  return <Music></Music>;
  default: return <About></About>
    }
  }


  return (
    <div>
      <Nav
      active={active}
      setActive={setActive}
      currentPage={currentPage}
      handlePageChange={handlePageChange}
       
      ></Nav>
      <Hero></Hero>
    <main>
   {renderPage()}
    </main>
    </div>
  );
}

export default App;