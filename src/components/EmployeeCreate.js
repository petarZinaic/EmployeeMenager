import React, { Component  } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component { 

    onButtonPress() {
        const {name, age, position} = this.props;

        this.props.employeeCreate({ name, age, position: position || 'Frontend' });
    }

    render() {
        return(
           <Card>
            
            <EmployeeForm  {...this.props} />

              <CardSection>
                  <Button onPress={this.onButtonPress.bind(this)}>
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

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);