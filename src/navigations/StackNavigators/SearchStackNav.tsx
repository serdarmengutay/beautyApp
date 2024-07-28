import Search from "../../screens/Search";
import SearchDetail from "../../screens/Search/SearchDetail";
import BeautyServiceDetail from "../../screens/Search/BeautyServiceDetail";
import StackNavigator, { Stack } from "../../helper/stack-navigator";

const SearchStack: React.FC  = ()=> {
    return (
        <StackNavigator>
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="SearchDetail" component={SearchDetail} />
            <Stack.Screen name="BeautyServiceDetail" component={BeautyServiceDetail} />
        </StackNavigator>
    )
}

export default SearchStack;