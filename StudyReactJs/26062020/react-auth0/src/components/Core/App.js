import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Header from '../Common/Header/Header';
import Copyright from '../Common/Footer/Copyright/Copyright';
import Footer from '../Common/Footer/Footer';
import Newsletter from '../Common/Newsletter/Newsletter';
import RouterURL from './RouterURL/RouterURL';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'testcase'
    }
  }
  show(params) {
    this.setState({
      test: 'Thay đổi'
    })
  }
  render() {
    return (
      <Router>
      
          <div className="super_container">
            <Header></Header>
            
            <RouterURL></RouterURL>    
           
            <Newsletter></Newsletter>
            <Footer></Footer>
            <Copyright></Copyright>
        </div>


      </Router>

    );
  }

}

export default App;
