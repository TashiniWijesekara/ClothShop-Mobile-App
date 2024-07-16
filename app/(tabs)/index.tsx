import { View ,Text , StyleSheet ,Image , Button } from "react-native";
import React from "react";
import { Link, router } from 'expo-router';


const Index = ()=> {
  return (
    // Home page or loging page 1
    <View>
      <Text></Text>
      <Text style={styles.nametext}>{"\n"} ZANY Clothing </Text>
      <Image style={styles.logo} source={require('../../assets/images/cloth_logo.png')}  />
      <Text></Text>
      <Text style={styles.welltext}>Welcome To Our Zany Online Clothing Store...</Text>
      <Text style={styles.introtext}>Zany is a luxury fashion brand. Enter a world of fashion and sophistication 
        tailored just for you. If you are looking for ever trendy fashion, our online store
         offers a diverse collection for every wardrobe.  </Text>
         
         <Text style={styles.introtext}>{"\n"} With a commitment to quality, comfort, and the latest trends,
           we invite you to explore our virtual aisles and discover your next favorite outfit. 
           Embrace effortless shopping and impeccable style with Zany Online Clothing store.{"\n"} {"\n"} </Text>
         
        <Button 
            title="Login Store"
            color="#F34572"
            onPress={()=>router.push('Home')} 
            // color= "gray"
            />

    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  nametext: {
    fontSize: 30,
    color: '#F34572',
    textAlign: 'center',
    
  },
  welltext: {
    fontSize: 20,
    color: 'black',
    // textAlign: 'center',
    
  },
  introtext: {
    fontSize: 16,
    color: 'black',
    
  },

  logo: {
    marginTop: '8%',
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70,
    
    
  
  },

  
});

