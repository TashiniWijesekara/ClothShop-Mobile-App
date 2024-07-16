import { View ,Text , StyleSheet, TextInput ,Image } from "react-native";
import React from 'react'
import LinearGradient from "react-native-linear-gradient";
import Header from "../../components/Header";

const Home = () => {
  return (
    <View>
      <Header/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
  },
});
