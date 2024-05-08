import { useMemo } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const useTabBarStyle = (route: any, hiddenRoutes: any) => {
  return useMemo(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? '';
    if (hiddenRoutes?.includes(routeName)) {
      return { display: 'none' };
    }
    return {};
  }, [route, hiddenRoutes]);
};

export default useTabBarStyle;