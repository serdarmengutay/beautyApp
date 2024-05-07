import Home from '../screens/Home'
import TabNavigator from '../helper/tab-navigator';
import { Tab } from '../helper/tab-navigator'

const BottomTabNavigator: React.FC = () => {
  return (
    <TabNavigator>
      <Tab.Screen name="Home" component={Home} />
    </TabNavigator>
  )
}

export default BottomTabNavigator;