import React from 'react';
import {BrowserRouter as Router, Route,Link}   from 'react-router-dom'

import './App.css';
import Humberger from '../Nav/Humberger/Humberger';
import Header from '../Nav/Header/Header'
import Hero from '../Hero/Hero';
import Categories from '../Nav/Categories/Categories';
import Featured from '../Nav/Featured/Featured';
import Banner from '../Nav/Banner/Banner';
import LatestProduct from '../Home/LatestProduct/LatestProduct';
import Blog from '../Nav/Blog/Blog';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import Contact from '../Contacts/Contact/Contact';
import Home from '../Home/Home';
import RouterURL from '../RouterURL/RouterURL';

function App() {
  return (
    <Router>
      <div>
        <div id="preloder">
          <div className="loader" />
        </div>
        {/* <Humberger></Humberger> */}
        <Header></Header>
        <RouterURL></RouterURL>
        {/* <Hero></Hero> */}
        {/* <Categories></Categories>
      <Featured></Featured>
      <Banner></Banner> */}
        {/* <Home></Home> */}
        {/* <Contact></Contact> */}
        {/* <Product></Product> */}
        {/* <LatestProduct></LatestProduct> */}
        <Blog></Blog>
        <Footer></Footer>







      </div>
    </Router>

  );
}

export default App;
