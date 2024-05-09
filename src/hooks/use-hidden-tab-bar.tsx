import { useMemo } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { tabBarStyle } from '../constants/theme/tabBarStyle';

const useTabBarStyle = (route: any, hiddenRoutes: any) => {
  return useMemo(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? '';
    if (hiddenRoutes?.includes(routeName)) {
      return { display: 'none' };
    }
    return {
      tabBarStyle,
    };
  }, [route, hiddenRoutes]);
};

export default useTabBarStyle;