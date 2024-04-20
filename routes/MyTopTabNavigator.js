import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyStack from './MyStack';
import MyDrawer from './MyDrawer';
import MyBottomTabNavigator from './MyBottomTabNavigator';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
        style = {{flex:1, marginTop: 20}}
    >
      <Tab.Screen name="Stack" component={MyStack} />
      <Tab.Screen name="Drawer" component={MyDrawer} />
      <Tab.Screen name="BottomTab" component={MyBottomTabNavigator} />
    </Tab.Navigator>
  );
}
export default MyTabs;