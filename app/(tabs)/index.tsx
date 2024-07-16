import { View ,Text , StyleSheet ,Image , Button } from "react-native";
import React from "react";
import { Link, router } from 'expo-router';


const Index = ()=> {
  return (
    // Home page or loging page 1
    <View>
      <Text style={styles.nametext}>Welcome to Our Clothing Shop Online Store...</Text>
      <Image style={styles.logo} source={require('../../assets/images/cloth_logo.png')} />
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
    
  },

  logo: {
    marginTop: '10%',
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70,
  },

  
});

