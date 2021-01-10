import React, { Component  } from 'react';
import {Picker} from '@react-native-picker/picker';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component { 

    onButtonPress() {
        const {name, age, position} = this.props;

        this.props.employeeCreate({ name, age, position: position || 'Frontend' });
    }

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


              <CardSection >
         
                  <Picker
                  style={{ flex: 1 }}
                  selectedValue={this.props.position}
                  onValueChange={value => this.props.employeeUpdate({ prop: 'position', value })}
                  >
                      <Picker.Item label="Frontend" value="Frontend" />
                      <Picker.Item label="Backend" value="Backend" />
                      <Picker.Item label="Project Menager" value="Project Menager" />
                  </Picker>
              </CardSection>


              <CardSection>
                  <Button onPress={this.onButtonPress.bind(this)}>
                      Create
                  </Button>
              </CardSection>

           </Card>
        )
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 19,
        paddingLeft: 20
    }
}

const mapStateToProps = (state) => {
    const { name, age, position } = state.employeeForm;

    return { name, age, position };
};

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);