import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text} from 'react-native';
import { ListView } from 'deprecated-react-native-listview'
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
 


   render() {
       console.log(this.props);
       return(
           <View>
               <Text>Employee List</Text>
               <Text>Employee List</Text>
               <Text>Employee List</Text>
               <Text>Employee List</Text>
               <Text>Employee List</Text>
               <Text>Employee List</Text>
           </View>
       )
   } 
}



export default connect(null, { employeesFetch }) (EmployeeList);