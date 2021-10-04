   import React, { Component } from 'react';
    import axios from 'axios';
    import Table from './Table';

    export default class Employeelist extends Component {

      constructor(props) {
          super(props);
          this.state = {business: []};
        }
        componentDidMount(){
          //debugger;
          axios.get('/api/')
            .then(response => {
                console.log(response);
                    console.log(response.data);
              this.setState({ business: response.data });
                    console.log(this.state);
            //  debugger;

            })
            .catch(function (error) {
              console.log(error);
            })
        }

        tabRow(){
          return this.state.business.map(function(object, i){
              return <Table obj={object} key={i} />;
          });
        }

        render() {
			const firstrec = Array.isArray(this.state.business) && this.state.business.length ? this.state.business[0] : {};
			const headers = Object.keys(firstrec);
          return (
            <div>
              <h4 align="center">Employee List</h4>
              <table className="table table-striped" style={{ marginTop: 10 }}>
                <thead>
                  <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th colSpan="4">Action</th>
                  </tr>
                </thead>
                <tbody>
                 { this.tabRow() }
                </tbody>
		  </table>
            </div>
          );
        }
      }
