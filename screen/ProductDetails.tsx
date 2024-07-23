import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '@/components/Header';
const imageUrl = "https://i2-prod.irishmirror.ie/incoming/article10550974.ece/ALTERNATES/s615b/Gigi-Hadid-bears-her-midriff-when-wearing-a-canary-yellow-outfit-in-New-York.jpg"

const ProductDetails = () => {
  return (
    <View style={{height:'100%',backgroundColor: '#FCEEF2',paddingTop:70 }}>
        <View style={styles.headerContainer}>
          <Header/>
        </View>
        <Image source={{uri:imageUrl}} style={styles.firstImg}/>
        <View style={styles.ImgTitle}>
          <Text>Full OutFit Kit</Text>
          <Text>LKR 8,900.00</Text>
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
  }
});