import { View ,Text , StyleSheet ,Image , TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "expo-router";

const Header = ({isCart }) => {
const navigation = useNavigation();

    return(
        
        <View style={styles.container}>
         
            <TouchableOpacity onPress={()=>navigation.navigate("Home")} 
                style={styles.appIconContainer}>
                {
                    isCart? (
                 //back icon to home pge
                <Ionicons style={styles.backIcon} name={"chevron-back"} color={"#FE6C92"} size={25}/> 
             ): (
                <Image source={require('../assets/images/Appicon1.png')}
                style={styles.appIcon}
                />
                )}

            </TouchableOpacity>
    
            { isCart && <Text style={styles.cartTxt}>My Cart</Text> }
            <Image source={require('../assets/images/ggDp.png')}
            style={styles.dp}
                />
        </View>
    );
};

export default Header 

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
       // marginTop: 0,
    },
        //app icon round
    appIconContainer: {
        backgroundColor: "white",
        height: 43,
        width: 43,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
        marginStart:14,
    },

    appIcon: {
        height: 46,
        width: 46,
        
    },

    dp: {
        height: 44,
        width: 44,
        borderRadius: 22,
        marginEnd: 13,
    },
    cartTxt: {
        fontSize: 28,
        color: '#FE6C92'
    },
    backIcon: {
        marginEnd: 4,
    }
});