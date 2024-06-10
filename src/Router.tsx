import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './navigations/BottomTabNavigator';
import StackNavigator from './helper/stack-navigator';
import { Stack } from './helper/stack-navigator';
import OnboardingScreen from './screens/Onboarding';
import RegistrationStackNav from './navigations/StackNavigators/RegistrationStackNav';

const Router: React.FC = () => {
  return (
   <NavigationContainer>
      <StackNavigator>
      <Stack.Screen 
         name="RegistrationStack"
         component={RegistrationStackNav}
         />
      <Stack.Screen 
         name="OnboardingScreen"
         component={OnboardingScreen}
         />
         <Stack.Screen 
         name="BottomTabNavigator"
         component={BottomTabNavigator}
         />
      </StackNavigator>
   </NavigationContainer>
  )
}

export default Router;