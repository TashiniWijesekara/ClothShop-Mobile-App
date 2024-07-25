import { Text, View , Image , StyleSheet } from 'react-native'
import React from "react";

const imageurl = "https://celebmafia.com/wp-content/uploads/2022/08/gigi-hadid-street-style-08-04-2022-6.jpg"

const CartCard =()=>{
    return (
        <View style={styles.container}>
        <Image source={{uri: imageurl }} style={styles.firstImg}/>
        <Text>CardCart</Text>
      </View>
    );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  firstImg: {
    height: 125,
    width:"25%",
    marginStart: 10,
  },
});