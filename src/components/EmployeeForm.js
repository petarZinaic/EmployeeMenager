import React, {Component} from 'react';
import {Picker} from '@react-native-picker/picker';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
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
            </View>
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

    return { name, age, position }
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);