import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CustomDrawerNavigation from "../components/CustomDrawerNavigation";

const Drawer = createDrawerNavigator()
const MyDrawer = ()=>{
    return(
        <Drawer.Navigator
            initialRouteName="home"
            drawerContent={(props) => <CustomDrawerNavigation {...props}/>}    
        >
            <Drawer.Screen 
                name="home" 
                component={HomeScreen}
                options={{
                    title: "Home Screen"
                }}
            />
            <Drawer.Screen 
                name="profile" 
                component={ProfileScreen}
                options={{
                    title: "Profile Screen"
                }}
            />
        </Drawer.Navigator>
    )
}
export default MyDrawer;