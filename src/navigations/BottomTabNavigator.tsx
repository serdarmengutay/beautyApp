
import SearchStack from './StackNavigators/SearchStackNav';
import BookingStack from './StackNavigators/BookingStackNav';
import AccountStack from './StackNavigators/AccountStackNav';
import useTabBarStyle from '../hooks/use-hidden-tab-bar';
import {searchHiddenTabBar} from '../constants/hiddenTabBarPages/search-hidden-tab-bar';
import { selectTabBarIcon } from '../utils/tab-bar-icon';
import TabNavigator from '../helper/tab-navigator';
import {Tab} from '../helper/tab-navigator';
import { theme } from '../constants/theme';



const BottomTabNavigator = () => {

  return (
    <TabNavigator screenOptions={({ route }: any) => ({
      tabBarIcon: ({ color, size }: any) => {
        return selectTabBarIcon({routeName: route.name, color, size});
      },
      headerShown: false,
      tabBarActiveTintColor: theme.colors.primary,
      tabBarHideOnKeyboard: true,
    })}>
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={({route}: any) => ({
          tabBarStyle: 
            useTabBarStyle(
              route,
              route.name === 'SearchStack' && searchHiddenTabBar,
            ),
          tabBarLabel: 'Search',
        })}
      />
      <Tab.Screen name="BookingStack" component={BookingStack}
      options={({ route }: any) => ({
        tabBarLabel: 'Booking',
        tabBarStyle: useTabBarStyle(
          route,
          route.name === 'BookingStack' && searchHiddenTabBar,
        ),
      })}
      />
      <Tab.Screen name="AccountStack" component={AccountStack} 
          options={({ route }: any) => ({
            tabBarLabel: 'Account',
            tabBarStyle: useTabBarStyle(
              route,
              route.name === 'AccountStack' && searchHiddenTabBar,
            ),
          })}
          />
    </TabNavigator>
  );
};

export default BottomTabNavigator;
