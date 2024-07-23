import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
const imageUrl = "https://i2-prod.irishmirror.ie/incoming/article10550974.ece/ALTERNATES/s615b/Gigi-Hadid-bears-her-midriff-when-wearing-a-canary-yellow-outfit-in-New-York.jpg"

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