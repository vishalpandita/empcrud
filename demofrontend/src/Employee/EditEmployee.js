import React from 'react';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  
import '../Employee/Addemployee.css'  
class Edit extends React.Component {  
    constructor(props) {  
        super(props)  
     
    this.onChangeFirstName = this.onChangeFirstName.bind(this);  
    this.onChangeLastName = this.onChangeLastName.bind(this);  
    this.onChangeEmail = this.onChangeEmail.bind(this);  
    this.onChangeDepartment = this.onChangeDepartment.bind(this);  
    this.onSubmit = this.onSubmit.bind(this);  
  
         this.state = {  
            FirstName: '',  
            LastName: '',  
            Email: '',  
            Department: ''  
  
        }  
    }  
  
  componentDidMount() {  
      axios.get('/api/'+this.props.match.params.id+'/')  
          .then(response => {  
              this.setState({   
                FirstName: response.data.firstname,   
                LastName: response.data.lastname,  
                Email: response.data.email,  
                Department: response.data.department });  
  
          })  
          .catch(function (error) {  
              console.log(error);  
          })  
    }  
  
  onChangeFirstName(e) {  
    this.setState({  
        FirstName: e.target.value  
    });  
  }  
  onChangeLastName(e) {  
    this.setState({  
        LastName: e.target.value  
    });    
  }  
  onChangeEmail(e) {  
    this.setState({  
        Email: e.target.value  
    });  
}  
    onChangeDepartment(e) {  
        this.setState({  
            Department: e.target.value  
        });  
  }  
  
 onSubmit(e) {
    e.preventDefault();
    const obj = {
       // Id:this.props.match.params.id,
      firstname : this.state.FirstName,
      lastname: this.state.LastName,
      email: this.state.Email,
      department: this.state.Department
 
    };
    axios.put('/api/'+this.props.match.params.id+'/', obj)
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
        this.props.history.push('/Employeelist');
      }
    })
  }  
    render() {  
        return (  
            <Container className="App">  
  
             <h4 className="PageHeading">Update Employee Information</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                    <Col>  
                        <FormGroup row>  
                            <Label for="firstname" sm={2}>First Name</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="FirstName" value={this.state.FirstName} onChange={this.onChangeFirstName}  
                                placeholder="Enter First Name" />  
                            </Col>  
                        </FormGroup>  
                        <FormGroup row>  
                            <Label for="lastname" sm={2}>Last Name</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="LastName" value={this.state.LastName} onChange={this.onChangeLastName} placeholder="Enter Last Name" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="email" sm={2}>Email</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Email" value={this.state.Email} onChange={this.onChangeEmail} placeholder="Enter Email" />  
                            </Col>  
                        </FormGroup>  
                         <FormGroup row>  
                            <Label for="department" sm={2}>Department</Label>  
                            <Col sm={10}>  
                                <Input type="text" name="Department"value={this.state.Department} onChange={this.onChangeDepartment} placeholder="Enter Department" />  
                            </Col>  
                        </FormGroup>   
                    </Col>  
                    <Col>  
                        <FormGroup row>  
                            <Col sm={5}>  
                            </Col>  
                            <Col sm={1}>  
                          <Button type="submit" color="success">Submit</Button>{' '}  
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
  
export default Edit; 
