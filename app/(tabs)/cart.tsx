import { View ,Text , StyleSheet, TextInput ,Image } from "react-native";
import React from 'react'

export default function cart() {
  return (
    <View>
      <Text style={styles.nametext}> {"\n"} My Cart</Text>
      <TextInput style={styles.input} placeholder="Enter your name" />
      
    </View>
  )
}

const styles = StyleSheet.create({
  nametext: {
    fontSize: 30,
    color: 'black',
    
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