import { View ,Text , StyleSheet ,Image } from "react-native";
import React from 'react'
import Header from '@/components/Header'

const cart = () => {
  return (
    <View style={{height:'100%',backgroundColor: '#FCEEF2',paddingTop:70 }}>
       <Header isCart={true}/>
      <View>
        <Text>My Cart</Text>
      </View>
    </View> //lineGardient
  );
};
export default cart;

const styles = StyleSheet.create({
  
});