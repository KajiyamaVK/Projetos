import React from 'react'
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import Login from './Pages/login'
import Tasks from './Pages/Tasks'
import PrivateRoute  from './PrivateRoutes'


const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <PrivateRoute path="/Tarefas" component={Tasks} /> 
      </Switch>
    </BrowserRouter>
)

export default Routes;