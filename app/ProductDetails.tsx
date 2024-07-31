import { Image, StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import React, { useState } from 'react';
import Header from "../components/Header";
import { useRoute } from '@react-navigation/native';
//const imageUrl = "https://www.hellonri.com/images/gallery/full260.jpg"

const sizes = ["S", "M", "L", "XL"];
const ColorsArray = ["black", "white","#fa086b","#08a2fa","#fafa08"];

const ProductDetails = () => {
  const route = useRoute();
  const item = route.params.item;
  //console.log(route.params.item);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
 
  return (
    <View style={{height:'100%',backgroundColor: '#FCEEF2',paddingTop:40 }}>
       
        <View style={styles.headerContainer}>
          <Header/>
          <Text></Text>
        </View>

        <Image source={{uri: item.image}} style={styles.firstImg}/>
        
        <View style={styles.DetailContainer}>
          <Text style={styles.title}>{item.title} </Text>
          <Text style={[styles.title, styles.price]}>LKR {item.price}.00</Text>
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
                  selectedSize == size && { color: "#fa086b"},
          ]}
          >
            {size}
            </Text>
              </TouchableOpacity>
            );
          })}
        </View>


        {/* color container */}
        <Text style={[styles.title, styles.colorText]}>Colors</Text>
        <View style={styles.colorContainer}>
            {
              ColorsArray.map((color)=> {
                    return(
                      <TouchableOpacity onPress={()=> {
                          setSelectedColor(color);
                      }}
                       style={[styles.circleBorder, selectedColor === color && {
                        borderColor: color,
                        borderWidth: 2,
                       },
                      ]}
                     >
                        <View style={[styles.circle , {backgroundColor: color }]}/>
                      </TouchableOpacity>
                    );
              })}
        </View>
        
        {/* bitton container */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>


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
      height: 350,
      //marginTop: 1,
      
  },
  DetailContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 20,
      marginVertical: 5,
      marginBottom: 10,
      
  },
  title: {
      fontSize: 18,
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
    alignItems: "center",

  },
  circle: {
    height: 33,
    width: 33,
    borderRadius: 18,
    //marginHorizontal: 5,
  },
  circleBorder: {
    height: 45,
    width: 45,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
   // borderColor: "#FCEEF2",
  },
  button: {
    backgroundColor: "#FE6C92",
    padding: 9,
    margin: 20,
    borderRadius: 40,

  },

  buttonText: {
      fontSize: 18,
      fontWeight: "500",
      color: "white",
      textAlign: "center",
  }

});