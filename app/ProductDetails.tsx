import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Header from "../components/Header";
const imageUrl = "https://www.hellonri.com/images/gallery/full260.jpg"

const sizes = ["S", "M", "L", "XL"];
const ColorsArray = ["black", "white","#fa086b","#08a2fa","#fafa08","#bfbebe","#fe4040"];
const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  return (
    <View style={{height:'100%',backgroundColor: '#FCEEF2',paddingTop:40 }}>
        <View style={styles.headerContainer}>
          <Header/>
          <Text></Text>
        </View>

        <Image source={{uri:imageUrl}} style={styles.firstImg}/>
        
        <View style={styles.DetailContainer}>
          <Text style={styles.title}>Full OutFit </Text>
          <Text style={[styles.title, styles.price]}>LKR 8,900.00</Text>
        </View>

        {/* size container */}
        <Text style={[styles.title, styles.sizeText]}>Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map((size) =>{
            return(
              <TouchableOpacity style={styles.sizeValueContainer}
              onPress={()=> {
                setSelectedSize(size);
              }}
              >
                <Text style={[
                  styles.sizeValue, 
                  selectedSize == size && { color: "#FE6C92"},
          ]}
          >
            {size}
            </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Text style={[styles.title, styles.colorText]}>Colors</Text>
        <View style={styles.colorContainer}>
            {
              ColorsArray.map((color)=> {
                    return(
                      <View>
                        <View style={[styles.circle , {backgroundColor: color }]}/>
                      </View>
                    );
              })}
        </View>
        
    </View> //linegardient
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  headerContainer: {
      //padding: 20,
      marginEnd: 0,
      marginStart:0,
  },
  firstImg: {
      width:"100%",
      height: 400,
      
  },
  DetailContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 20,
      marginVertical: 5,
      marginBottom: 10,
      
  },
  title: {
      fontSize: 20,
      color: "black",
      fontWeight: "300",
  },
  price : {
    color: "black",
  },
  sizeContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  sizeText: {
      marginHorizontal: 20,
      marginBottom: 2,
  
  },
  sizeValueContainer: {
      height: 36,
      width: 36,
      borderRadius: 18,
      backgroundColor: 'white',
      marginEnd: 12,
      justifyContent: "center",
      alignItems: "center",
      //marginTop: 10,
      marginHorizontal: 5,
      
  },
  sizeValue : {
   //color: '#3F3E3F',
    fontSize: 18,
    fontWeight: "500",
    //marginStart: 12,
    //marginTop: 5,
  },
  colorText: {
    marginHorizontal: 20,
    marginBottom: 2,
    marginTop: 10,
  },
  colorContainer: {
    flexDirection: "row",
    marginHorizontal: 20,

  },
  circle: {
    height: 36,
    width: 36,
    borderRadius: 18,
    marginHorizontal: 5,
  },

});