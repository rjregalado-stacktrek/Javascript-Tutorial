/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


import React, { Component } from 'react';

import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component{
   render(){
      return(
        <>
      <Router>
        <Header/>
        <Home/>
        <Projects/>
        <Footer/>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Routes>
      </Router>
        </>
      );
   }
}
export default App;



import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';


class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
*/
import './App.css';
import { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Preloader from '../src/components/Pre'
import Home from './pages/Home.js'
import About from './pages/About'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  const [load, upadateLoad] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <motion.div
        className="cursor"
        variants={variants}
        animate="default"
      />
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/project' element={<Project />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
