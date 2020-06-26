import React, { Component } from 'react';
import './App.css';
import List from './components/Home/List';
import Add from './components/Home/Add';
import Edit from './components/Home/Edit';
import Delete from './components/Home/Delete';
import Header from './components/Nav/Header';
import myData from '../src/data.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      statusForm: false,
      usersData : myData
    })
  }
  showForm = () => {
    if (this.state.statusForm) {
      return <Add formToogle={(e)=>this.changeStatusForm(e)}  add={(item)=>this.addAction(item)}></Add>
    }

  }
  
  addAction = (item)=>{
    this.state.usersData.push(item)
    this.setState({
      usersData: this.state.usersData
    })
  }
  changeStatusForm = (event)=>{
    event.preventDefault()
    // alert("Change Status ")
    this.setState({
      statusForm : !this.state.statusForm
    })
  }
  render() {
    // console.log(this.state.usersData)
    return (
      <div>
        <Header></Header>
        <List usersData={this.state.usersData} statusForm={this.state.statusForm} formToogle={(e)=>this.changeStatusForm(e)}></List>
        {/* <Add></Add> */}
        {this.showForm()}
        <Edit></Edit>
        <Delete></Delete>
      </div>
    );
  }

}

export default App;
