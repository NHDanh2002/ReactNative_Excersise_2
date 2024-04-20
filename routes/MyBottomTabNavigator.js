import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Icon } from "react-native-paper";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();
const MyBottomTabNavigator = () =>{
    return(
        <Tab.Navigator
            initialRouteName="home"
            activeColor="#e91e63"
            labelStyle={{ fontSize: 12 }}
            style={{ backgroundColor: 'tomato'}}
        >
            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name={"home"} size={26} color={color}/>
                    ),
                    tabBarColor: "silver"
                }}
            />
            <Tab.Screen
                name="profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name={"account"} size={26} color={color}/>
                    ),
                    tabBarColor: "silver"
                }}
            />
        </Tab.Navigator>
    )
}
export default MyBottomTabNavigator;