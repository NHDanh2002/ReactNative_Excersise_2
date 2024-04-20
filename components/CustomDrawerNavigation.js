import { Drawer } from "react-native-paper"

const CustomDrawerNavigation = ({navigation}) => {
    return (
        <Drawer.Section style = {{paddingTop: 40}}>
            <Drawer.Item 
                label="Home"
                icon={"home"}
                onPress={() => navigation.navigate("home")}
            />
            <Drawer.Item
                label="Profile"
                icon={"star"}
                onPress={()=> navigation.navigate("profile")}
            />
        </Drawer.Section>
    )
}

export default CustomDrawerNavigation;