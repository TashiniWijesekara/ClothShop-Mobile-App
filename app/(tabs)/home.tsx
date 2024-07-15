import { View ,Text , StyleSheet ,Image } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function Index() {
  return (
    // Home page
    <View>
      <Text style={styles.nametext}>Select Your Style</Text>

      <Image style={styles.tinyLogo}
        // source={{
        //   uri: 'https://reactnative.dev/img/tiny_logo.png',
        // }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  nametext: {
    fontSize: 30,
    color: 'black',
    // justifyContent: "center",
    // alignItems: "center",
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  
  tinyLogo: {
    width: 50,
    height: 50,
  },
})

