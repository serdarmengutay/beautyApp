import {NavigationProp, RouteProp} from '@react-navigation/native';
export interface StackNavProps {
  children: React.ReactNode;
}
export interface TabNavProps {
  children: React.ReactNode;
  screenOptions?: any;
}
export interface StackScreenProps {
  name: string;
  component: any;
  options?: any;
}
export interface NavigationProps {
  navigation?: NavigationProp<any> | any;
  route?: RouteProp<any, any>;
}
