import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../Cruds/Index';
import Create from '../Cruds/Create';
import Edit from '../Cruds/Edit';

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/index" component={Index}></Route>
                    <Route  path="/create" component={Create}></Route>
                    <Route  path="/edit/:id" component={Edit}></Route>
                </Switch>
            </div>
        );
    }
}

export default RouterURL;