import React from 'react';  
import axios from 'axios';  
import '../Employee/Addemployee.css'  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class Addemployee extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
FirstName:'',  
LastName:'',  
Email:'',  
Department:''  
}  
}   
Addemployee = () => {
    axios.post('http://34.134.57.158/api/', {
      firstname: this.state.FirstName,
      lastname: this.state.LastName,
      email: this.state.Email,
      department: this.state.Department
    }).then((res, rej) => {
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
        this.props.history.push('/Employeelist');
      }
    })
  }  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Employee Information</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="firstname" sm={2}>First Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="FirstName" onChange={this.handleChange} value={this.state.FirstName} placeholder="Enter First Name" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="lastname" sm={2}>Last Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="LastName" onChange={this.handleChange} value={this.state.LastName} placeholder="Enter Last Name" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="email" sm={2}>Email</Label>  
          <Col sm={10}>  
            <Input type="text" name="Email" onChange={this.handleChange} value={this.state.Email} placeholder="Enter Email" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="department" sm={2}>Department</Label>  
          <Col sm={10}>  
            <Input type="text" name="Department" onChange={this.handleChange} value={this.state.Department} placeholder="Enter Department" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.Addemployee} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
);  
}  
   
}  
   
export default Addemployee;
