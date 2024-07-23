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
        <Image source={{uri:imageUrl}}/>
    </View>
  );
};

export default ProductDetails

const styles = StyleSheet.create({
  headerContainer: {

  },
});