import Booking from "../../screens/Booking";
import StackNavigator, { Stack } from "../../helper/stack-navigator";

const BookingStack: React.FC  = ()=> {
    return (
        <StackNavigator>
            <Stack.Screen name="Booking" component={Booking} />
        </StackNavigator>
    )
}

export default BookingStack;