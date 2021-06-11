import React from 'react';
import Home from './Pages/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Contact from './Pages/contact/contact';
import Header from './Pages/header';
import About from './Pages/about/about';
import MainLogin from './Pages/Login/MainLogin';
import Footer from './Pages/footer';
import { AnimatePresence,motion} from "framer-motion";
import FooBarForm from './Pages/Form';
import Rough2 from './Pages/Rough2';
import Homepage  from './Pages/blog/pages/homepage/Homepage';
import Login  from './Pages/blog/pages/login/Login';
import Register  from './Pages/blog/pages/single/Single';
import Settings  from './Pages/blog/pages/settings/Settings';
import Write  from './Pages/blog/pages/write/Write';
import Single from './Pages/blog/pages/single/Single';


function App() {
  const currentUser = true;
  // const location = useLocation();
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
      <Route exact path="/blog" component ={Homepage}>
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        
    </Switch>
    </AnimatePresence>
    <Footer/>
  </Router>

  // <FooBarForm/>
  );
}

export default App;
