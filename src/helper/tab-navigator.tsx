import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabNavProps } from "../types/navigation-props";

export const Tab = createBottomTabNavigator();

const TabNavigator: React.FC<TabNavProps> = ({ children }: TabNavProps) => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
        {children}
        </Tab.Navigator>
    );
}

export default TabNavigator;