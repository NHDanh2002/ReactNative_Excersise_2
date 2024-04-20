import { View, Button } from "react-native"
import { Text } from "react-native-paper"

const HomeScreen = ({navigation}) => {
    return(
        <View style = {{flex:1, justifyContent: "center", alignItems: "center"}}>
            <Text>
                Home Screen
            </Text>
            <Button
                title="Go to Profile"  
                onPress={() => navigation.navigate('profile')}
            />
        </View>
    )
}
export default HomeScreen;