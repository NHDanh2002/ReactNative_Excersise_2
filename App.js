import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MyStack from "../Excersise_2/routes/MyStack";
import { PaperProvider } from "react-native-paper";
import MyDrawer from "../Excersise_2/routes/MyDrawer";
import MyBottomTabNavigator from "./routes/MyBottomTabNavigator";
import MyTabs from "./routes/MyTopTabNavigator";

const Stack = createStackNavigator()

const App = ()=>
{
  return(
    <NavigationContainer>
      <PaperProvider>
        <MyTabs/>
      </PaperProvider>
    </NavigationContainer>
  )
}
export default App;