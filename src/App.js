import React, {useState} from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';


function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    switch(currentPage) {
      case 'Projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />
    }
  }

  return (
    <div >
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}></Navbar>
      <main>
        {renderPage(currentPage)}
      </main>
       <Footer />
    </div>
  );
}

export default App;
