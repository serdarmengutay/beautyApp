
import Icon from 'react-native-vector-icons/Feather';
interface TabBarIconProps {
    routeName: string;
    color: string;
    size: number;
  }
  

export const selectTabBarIcon = ({ routeName, color, size }: TabBarIconProps) => {
    let iconName = '';
    if (routeName === 'SearchStack') {
      iconName = 'search';
    } else if (routeName === 'BookingStack') {
      iconName = 'list';
    } else if (routeName === 'AccountStack') {
      iconName = 'user';
    }
    return <Icon name={iconName} size={size} color={color} />;
  };
