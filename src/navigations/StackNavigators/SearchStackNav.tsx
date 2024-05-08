import Search from "../../screens/Search";
import SearchDetail from "../../screens/Search/SearchDetail";
import StackNavigator, { Stack } from "../../helper/stack-navigator";

const SearchStack: React.FC  = ()=> {
    return (
        <StackNavigator>
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="SearchDetail" component={SearchDetail} />
        </StackNavigator>
    )
}

export default SearchStack;