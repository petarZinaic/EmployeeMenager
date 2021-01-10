import React, { Component  } from 'react';
import {Picker} from '@react-native-picker/picker';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component { 
    render() {
        return(
           <Card>
              <CardSection>
                  <Input 
                  label="Name"
                  placeholder="Enter Name"
                  value={this.props.name}
                  onChangeText={value =>this.props.employeeUpdate({ prop: 'name', value })}
                  />
              </CardSection>

              <CardSection>
                  <Input 
                  label="Age"
                  placeholder="Enter Age"
                  value={this.props.age}
                  onChangeText={value => this.props.employeeUpdate({ prop: 'age', value  })}
                  />
              </CardSection>


              <CardSection></CardSection>


              <CardSection>
                  <Button>
                      Create
                  </Button>
              </CardSection>

           </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, age, position } = state.employeeForm;

    return { name, age, position };
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate);