import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

//const logoImg = require("../assets/images/whityFv.png");

const ProductCart = ({ item , handleLiked}) => {
  // const[isLiked, setIsLiked] = useState(false);
  return (
    <View style={styles.container}>
       <Image source={{uri: item.image}}style={styles.firstImg}/>
       <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>LKR {item.price}.00</Text>
       </View>
      {/* <Image source={require("../assets/images/YelooOutFit.png")}
       style={styles.firstImg}/>
       <View style={styles.content}>
          <Text style={styles.title}>Full Kit</Text>
          <Text style={styles.price}>LKR 9,850.00</Text>
       </View> */}

       {/* heart like container */}
      <View style= {styles.likeContainer}>
       <TouchableOpacity onPress={() => {
            handleLiked(item);
       }}
     >
          {item?.isLiked ? (
            //colored heart icon
            <AntDesign name={"heart"} size={20} color={"#FE6C92"}/>
          ) : (
          <AntDesign name={"hearto"} size={20} color={"#FE6C92"}/>
          )}
       </TouchableOpacity>
       </View> 
    </View>
  );
};

export default ProductCart;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: 20,
      //position: "relative",
      // borderWidth: 1,
      // borderColor: "black",
  },

    firstImg: {
        height: 256,
        width: "90%",
        borderRadius: 20,
        marginVertical: 10,
        marginLeft: 10,
    },
    title: {
      fontSize: 16,
      color: "#575153",
      marginLeft: 18,
      // fontWeight:  
    },
    price: {
      fontSize: 14,
      color: "gray",
      marginLeft: 18,
    },
    content: {
      paddingLeft: 10,
    },
    likeContainer: {
        height: 34,
        width: 34,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 17,
        position: "absolute",
        top: 20,
        right: 18,
    },
});