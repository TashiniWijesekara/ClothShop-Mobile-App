import { Text, View , Image , StyleSheet } from 'react-native'
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"

const imageurl = "https://images.bauerhosting.com/celebrity/sites/3/2021/10/gigi-hadid-string-ting-phone-wrislet-strap.jpg?auto=format&w=1440&q=80"

const CartCard =()=>{
    return (
        <View style={styles.container}>
          <Image source={{uri: imageurl }} style={styles.firstImg}/>
       
        <View style={styles.cardContent}>
           <Text style={styles.title} >Crop Top</Text>
           <Text style={styles.price} >LKR 4,100.00</Text>
        <View style={styles.circleSizeContainer}>
            <View style={styles.circle}/>
            <View style={styles.sizeCircle}> 
              <Text style={styles.sizetxt}>M</Text>
            </View>
        </View>
        </View>
            <FontAwesome6  style={styles.trash} name={"trash-can"} color={"#FE6C92"} size={18}/>
      </View>
    );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: "row",
  },
  firstImg: {
    height: 145,
    width:"30%",
    marginStart: 20,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
   // marginTop: 20,
  },
  title: {
    fontSize: 16,
    color: '#797577',
    marginStart: 15,
    //marginTop: 24,
    
  },
  price: {
    //fontSize: 15,
    color: '#797577',
    marginVertical: 10,
    marginStart: 16,
    marginTop: 2,
  },
  circle: {
      height: 32,
      width:32,
      borderRadius: 16,
      backgroundColor: 'white',
      marginStart: 15,
  },
  trash: {
    marginTop: 4,
    marginEnd: 18,
  },
  circleSizeContainer: {
      flexDirection: "row",
     
  },
  sizeCircle: {
    backgroundColor: 'white',
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  sizetxt: {
    fontSize: 18,
    fontWeight: "400",
    color: '#797577',
  },

});