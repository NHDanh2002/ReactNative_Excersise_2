import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Title } from "react-native-paper";
import { Button } from "react-native";

const Stack = createStackNavigator()
const MyStack = ()=>{
    return(
        <Stack.Navigator
            initialRouteName="home">
            <Stack.Screen 
                name="home" 
                component={HomeScreen}
                options={{
                    title: "Home Screen"
                }}
            />
            <Stack.Screen 
                name="profile" 
                component={ProfileScreen}
                options={{
                    title: "Profile Screen"
                }}
            />
        </Stack.Navigator>
    )
}
export default MyStack;