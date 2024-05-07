import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './navigations/BottomTabNavigator';
import StackNavigator from './helper/stack-navigator';
import { Stack } from './helper/stack-navigator';

const Router: React.FC = () => {
  return (
   <NavigationContainer>
      <StackNavigator>
         <Stack.Screen 
         name="BottomTabNavigator"
         component={BottomTabNavigator}
         />
      </StackNavigator>
   </NavigationContainer>
  )
}

export default Router;