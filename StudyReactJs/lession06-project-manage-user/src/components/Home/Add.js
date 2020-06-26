import React, { Component } from 'react';
const uuidv4 = require('uuid')
class Add extends Component {
    constructor(props) {
        super(props);
        this.state= {
            txtName: '',
            txtPassword : '',
            sltLevel : 1
        }
    }
    
    submitForm = (event)=>{
        event.preventDefault()
        event.target.reset()
        let content = ''
        const {txtName,txtPassword,sltLevel} = this.state
        // content += "User :" + txtName
        // content += " - Password" + txtPassword
        // content += " - Level : " + sltLevel
        // console.log(content)
        const item = {}
        item.id = 11
        item.username = txtName
        item.password = txtPassword
        item.level = sltLevel
        this.props.add(item)
        console.log(item)
    }
    changeInput = (event)=>{
        const target = event.target
        const name = target.name
        const value = target.value
        this.setState({
            [name]:value
        })

    }
    render() {
        return (
            <div>
                {/* Add Modal HTML */}
                <div id="addEmployeeModal" className="">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={(event)=>this.submitForm(event)}>
                                <div className="modal-header">
                                    <h4 className="modal-title">Add Employee</h4>
                                    <button type="button" className="close"  onClick={(e) => this.props.formToogle(e)} data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" name="txtName" className="form-control" required onChange={(e)=>this.changeInput(e)}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" name="txtPassword" className="form-control"  onChange={(e)=>this.changeInput(e)} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="sltLevel">Permission</label>
                                        <select className="form-control" value={this.state.sltLevel} name="sltLevel"  onChange={(e)=>this.changeInput(e)}>
                                            <option value={1}>Manager</option>
                                            <option value={2}>Employee</option>
                                        </select>
                                    </div>
                                    {/* <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea className="form-control" required defaultValue={""} />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="text" className="form-control" required />
                                    </div> */}
                                </div>
                                <div className="modal-footer">
                                    <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                    <input type="submit" className="btn btn-success" defaultValue="Add" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;