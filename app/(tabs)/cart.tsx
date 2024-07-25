import { View ,Text , StyleSheet ,Image } from "react-native";
import React from 'react'
import Header from '@/components/Header'
import CartCard from "@/components/CartCard";

const cart = () => {
  return (
    <View style={{height:'100%',backgroundColor: '#FCEEF2', paddingTop: 30 }}>
       <View style={styles.headerContainer}>
          <Header isCart={true}/>
       </View>

       <CartCard/>
    </View> //lineGardient
  );
};
export default cart;

const styles = StyleSheet.create({
  headerContainer: {
    marginVertical: 10 ,
    marginBottom: 20,
  },
});