import TabNavigator from '../helper/tab-navigator';
import {Tab} from '../helper/tab-navigator';
import SearchStack from './StackNavigators/SearchStackNav';
import BookingStack from './StackNavigators/BookingStackNav';
import AccountStack from './StackNavigators/AccountStackNav';
import useTabBarStyle from '../hooks/use-hidden-tab-bar';
import {searchHiddenTabBar} from '../constants/hiddenTabBarPages/search-hidden-tab-bar';



const BottomTabNavigator: React.FC = () => {

  return (
    <TabNavigator>
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={({route}: any) => ({
          tabBarStyle: useTabBarStyle(
            route,
            route.name === 'SearchStack' && searchHiddenTabBar,
          ),
        })}
      />
      <Tab.Screen name="BookingStack" component={BookingStack} />
      <Tab.Screen name="AccountStack" component={AccountStack} />
    </TabNavigator>
  );
};

export default BottomTabNavigator;
