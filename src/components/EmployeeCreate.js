import React, { Component  } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component { 
    render() {
        return(
           <Card>
              <CardSection>
                  <Input 
                  label="Name"
                  placeholder="Enter Name"
                  />
              </CardSection>

              <CardSection>
                  <Input 
                  label="Age"
                  placeholder="Enter Age"
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

export default EmployeeCreate;