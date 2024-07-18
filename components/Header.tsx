import { View ,Text , StyleSheet ,Image } from "react-native";
import React from "react";

const Header = () => {
    return(
        <View style={styles.container}>
            <View style={styles.appIconContainer}>
                <Image source={require('../assets/images/Appicon1.png')}
                style={styles.appIcon}
                />
            </View>
            <Image source={require('../assets/images/ggDp.png')}
                style={styles.dp}
                />
        </View>
    )
}

export default Header 

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // marginTop: 1,
    },
        //app icon round
    appIconContainer: {
        backgroundColor: "white",
        height: 45,
        width: 45,
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
        marginEnd:13,
    },
});