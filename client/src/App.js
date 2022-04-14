import  React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Gallery from './components/pages/Gallery';
import Music from './components/pages/Music';


function App() {

//   const [active, setActive] = useState(false)

//   const [currentPage, handlePageChange] = useState('About');

// useEffect(()=>{
//   document.title = currentPage
// })

//   const renderPage = () =>{
//     switch (currentPage){
// case "Galley":
//   return <Gallery></Gallery>;
//   case "Music":
//   return <Music></Music>;
//   default: return <Gallery></Gallery>
//     }
//   }


  return (
    <div>
      <Nav
      // active={active}
      // setActive={setActive}
      // currentPage={currentPage}
      // handlePageChange={handlePageChange}
       
      ></Nav>
    <main>
   {/* {renderPage()} */}
    </main>
    </div>
  );
}

export default App;