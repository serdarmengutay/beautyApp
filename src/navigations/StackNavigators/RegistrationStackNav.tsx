import React from 'react'
import StackNavigator, { Stack } from '../../helper/stack-navigator'
import RegistrationStepOne from '../../screens/Auth/Registration/RegistrationStepOne'
import RegistrationStepTwo from '../../screens/Auth/Registration/RegistrationStepTwo'
import RegistrationStepThree from '../../screens/Auth/Registration/RegistrationStepThree'
import Login from '../../screens/Auth/Login/Login'


const RegistrationStackNav = () => {
    return (
        <StackNavigator>
            <Stack.Screen name='RegistrationStepOne' component={RegistrationStepOne}/> 
            <Stack.Screen name='RegistrationStepTwo' component={RegistrationStepTwo}/> 
            <Stack.Screen name='RegistrationStepThree' component={RegistrationStepThree}/> 
            <Stack.Screen name='Login' component={Login}/> 
        </StackNavigator>
    )
}
export default RegistrationStackNav;