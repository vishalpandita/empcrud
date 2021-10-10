import React from 'react';  
import Addemployee from './Employee/Addemployee';  
import Employeelist from './Employee/Employeelist';  
import EditEmployee from './Employee/EditEmployee';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './App.css';  
function App() {  
  return (  
    <Router>  
      <div className="container">  
        <nav className="navbar navbar-expand-lg navheader">  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
              <li className="nav-item">  
                <Link to={'/Addemployee'} className="nav-link">Employee_XXX_Addition</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/Employeelist'} className="nav-link">Employee_XXX_Listing</Link>  
              </li>  
            </ul>  
          </div>  
        </nav> <br />  
        <Switch>  
          <Route exact path='/Addemployee' component={Addemployee} />  
          <Route path='/edit/:id' component={EditEmployee} />  
          <Route path='/Employeelist' component={Employeelist} />  
        </Switch>  
      </div>  
    </Router>  
  );  
}  
  
export default App; 
