import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Header from "../components/Header";
const imageUrl = "https://www.hellonri.com/images/gallery/full260.jpg"

const sizes = ["S", "M", "L", "XL"];
const ProductDetails = () => {
  return (
    <View style={{height:'100%',backgroundColor: '#FCEEF2',paddingTop:70 }}>
        <View style={styles.headerContainer}>
          <Header/>
        </View>
        <Image source={{uri:imageUrl}} style={styles.firstImg}/>
        <View style={styles.ImgContainer}>
          <Text style={styles.title}>Full OutFit Kit</Text>
          <Text style={[styles.title, styles.price]}>LKR 8,900.00</Text>
        </View>

        {/* size container */}
        <Text style={[styles.title, styles.sizeText]}>Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map((size) =>{
            return(
              <TouchableOpacity>
                <Text>{size}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  headerContainer: {
      padding: 20,
  },
  firstImg: {
      width:"100%",
      height: 420,
  },
  ImgContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 20,
      marginVertical: 20,
  },
  title: {
      fontSize: 20,
      color: "black",
      fontWeight: "500",
  },
  price : {
    color: "black",
  },
  sizeContainer: {

  },
  sizeText: {
      marginHorizontal: 20,
  }

});