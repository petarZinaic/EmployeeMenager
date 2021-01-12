import _ from 'lodash'; 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
    state = { showModal: false }

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, age, position} = this.props;

        this.props.employeeSave({ name, age, position, uid: this.props.employee.key });
    }

    deleteButtonPress() {
        const { uid } = this.props.employee; 

        this.props.employeeDelete({ uid });
    }

    render() {
        return(
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal  })}>
                        Fire Employee
                    </Button>
                </CardSection>

                
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, age, position } = state.employeeForm;

    return { name, age, position };
}


export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);