import React from 'react';
import Home from './Pages/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Contact from './Pages/contact';
import Header from './Pages/header';
import About from './Pages/about';
import MainLogin from './Pages/MainLogin';
import Footer from './Pages/footer';
import { AnimatePresence,motion} from "framer-motion";
import FooBarForm from './Pages/Form';
import Rough2 from './Pages/Rough2';


function App() {
  const location = useLocation();
  return (  
    <Router>
    <Header />
    <AnimatePresence exitBeforeEnter>
    <Switch >
    {/* location={location} key={location.pathname} */}
      <Route path='/' exact component= {Rough2} />
      <Route path='/contact' component={Contact} />
      <Route path='/about' component={About} />
      <Route path='/login' component={MainLogin} />
    </Switch>
    </AnimatePresence>
    <Footer/>
  </Router>

  // <FooBarForm/>
  );
}

export default App;
