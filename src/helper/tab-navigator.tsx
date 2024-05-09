import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabNavProps } from "../types/navigation-props";

export const Tab = createBottomTabNavigator();

const TabNavigator: React.FC<TabNavProps> = ({ children, screenOptions}: TabNavProps) => {
    return (
        <Tab.Navigator
        screenOptions={screenOptions}>
        {children}
        </Tab.Navigator>
    );
}

export default TabNavigator;