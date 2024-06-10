import React from 'react'
import StackNavigator, { Stack } from '../../helper/stack-navigator'
import RegistrationStepOne from '../../screens/Auth/RegistrationStepOne'
import RegistrationStepTwo from '../../screens/Auth/RegistrationStepOne'
import RegistrationStepThree from '../../screens/Auth/RegistrationStepOne'


const RegistrationStackNav = () => {
    return (
        <StackNavigator>
            <Stack.Screen  name='RegistrationStepOne' component={RegistrationStepOne}/> 
            <Stack.Screen  name='RegistrationStepTwo' component={RegistrationStepTwo}/> 
            <Stack.Screen  name='RegistrationStepThree' component={RegistrationStepThree}/> 
        </StackNavigator>
    )
}
export default RegistrationStackNav;