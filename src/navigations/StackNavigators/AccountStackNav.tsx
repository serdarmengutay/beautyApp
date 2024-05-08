import Account from "../../screens/Account";
import StackNavigator, { Stack } from "../../helper/stack-navigator";

const AccountStack: React.FC  = ()=> {
    return (
        <StackNavigator>
            <Stack.Screen name="Account" component={Account} />
        </StackNavigator>
    )
}

export default AccountStack;