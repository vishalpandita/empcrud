import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    DeleteEmployee = () => {
    axios.delete('/api/' + this.props.obj.id + '/')
      .then((res, rej) => {
        let retVal;
        if (res) {
          console.log("must have done good");
          console.log(res);
          retVal = new Promise((resolve, reject) => resolve("Success!"));
        } else {
          console.log("must have done bad");
          console.log(rej);
          retVal = new Promise((resolve, reject) => reject("Failure!"));
        }
        return retVal;
      }).then(response => {
        if (response) {
          window.location.reload();
        }
      })
  }  
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.firstname}  
          </td>  
          <td>  
            {this.props.obj.lastname}  
          </td>  
          <td>  
            {this.props.obj.email}  
          </td>  
          <td>  
            {this.props.obj.department}  
          </td>  
          <td>  
          <Link to={"/edit/"+this.props.obj.id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteEmployee} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table;
