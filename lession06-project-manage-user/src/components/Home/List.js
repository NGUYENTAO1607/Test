import React, { Component } from 'react';
import Add from './Add';
import ListTrRow from './ListTrRow';

class List extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = ({
    //     //     statusButton: true
    //     // })
    //   }
    showButton =() =>{
        if(!this.props.statusForm){
            return <a  onClick={(e) => this.props.formToogle(e)} className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Add New Employee</span></a>
        }else{
            return <a  onClick={(e) => this.props.formToogle(e)} className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Delete</span></a>
            // return <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Delete</span></a>
        }
    }
    classList = ()=>{
        if(!this.props.statusForm){
           
        }else{
            
            // return <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Delete</span></a>
        }
    }
    mappingData = ()=>{
        const tableRow = this.props.usersData.map((val,key)=>{
        return <ListTrRow level={val.level} key={key} >{val.username}</ListTrRow>
        })
        return tableRow
    }
    
    render() {
        return (
            <div>
                 <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Manage <b>Employees</b></h2>
                </div>
                <div className="col-sm-6">
                {this.showButton()}
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="selectAll" />
                      <label htmlFor="selectAll" />
                    </span>
                  </th>
                  <th>Name</th>
                  <th>Password</th>
                  <th>Permission</th>
                  
                  {/* <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Actions</th> */}
                </tr>
              </thead>
              <tbody>
               {this.mappingData()}
              
              </tbody>
            </table>
            <div className="clearfix">
              <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
              <ul className="pagination">
                <li className="page-item disabled"><a href="#">Previous</a></li>
                <li className="page-item"><a href="#" className="page-link">1</a></li>
                <li className="page-item"><a href="#" className="page-link">2</a></li>
                <li className="page-item active"><a href="#" className="page-link">3</a></li>
                <li className="page-item"><a href="#" className="page-link">4</a></li>
                <li className="page-item"><a href="#" className="page-link">5</a></li>
                <li className="page-item"><a href="#" className="page-link">Next</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
            </div>
        );
    }
}

export default List;