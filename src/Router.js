import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                     <Scene key="login" component={LoginForm} title="Please Login" titleStyle={styles.navigationTitle} initial/>
                </Scene>
                <Scene key="main" titleStyle={styles.navigationTitle}>
                <Scene key="employeeList" component={EmployeeList} title="Employees" />  
                </Scene>
            </Scene>
        </Router>
    );
}

const styles = {
    navigationTitle: {
        flex: 1,
        textAlign: 'center'
    }
}

export default RouterComponent;