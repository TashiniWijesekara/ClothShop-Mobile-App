import { View ,Text , StyleSheet ,Image } from "react-native";
import React from "react";

const Header = () => {
    return(
        <View style={styles.container}>
            <View style={styles.appIconContainer}>
                <Image source={require('../assets/images/appsIcon.png')}
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
    },

    appIconContainer: {
        backgroundColor: "white",
        height: 44,
        width: 44,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
    },

    appIcon: {
        height: 28,
        width: 28,
    },

    dp: {
        height: 44,
        width: 44,
        borderRadius: 22,
    },
});