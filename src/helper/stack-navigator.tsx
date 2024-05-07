import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackNavProps } from "../types/navigation-props";

export const Stack = createNativeStackNavigator();

const StackNavigator: React.FC<StackNavProps> = ({ children }: StackNavProps) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        {children}
        </Stack.Navigator>
    );
}

export default StackNavigator;