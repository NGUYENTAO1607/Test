import React, { Component } from 'react';

class ListTrRow extends Component {
    render() {
        return (
         
                  <tr>
                  <td>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="checkbox5" name="options[]" defaultValue={1} />
                      <label htmlFor="checkbox5" />
                    </span>
                  </td>
        <td>{this.props.children}</td>
        <td>{this.props.level === 1 ? 'Manager': 'Employee'}</td>
                  {/* <td>martinblank@mail.com</td>
                  <td>Via Monte Bianco 34, Turin, Italy</td>
                  <td>(480) 631-2097</td> */}
                  <td>
                    <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                    <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                  </td>
                </tr>
            
        );
    }
}

export default ListTrRow;