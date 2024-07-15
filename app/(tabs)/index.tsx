import { View ,Text , StyleSheet, TextInput ,Image } from "react-native";
import React from "react";

export default function Index() {
  return (
    <View>
      <Text style={styles.nametext}>Home</Text>
      <TextInput style={styles.input} placeholder="Enter your name" />
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
    color: 'pink',
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

