import { View,Dimensions ,Text , StyleSheet ,Image , Button  } from "react-native";
import React from "react";
import { Link, router } from 'expo-router';

const Index = ()=> {
  const dimensions = Dimensions.get('window');
  const { width, height } = dimensions;

  return (
    // Home page or loging page 1
    <View>
      {Object.entries(dimensions).map(([key, value]) => (
      <View key={key} style={{ width, height, backgroundColor: '#FCEEF2', display: 'flex', alignItems: 'center'}}>
        
      <Text></Text>
      <Text style={styles.nametext}>{"\n"} ZANY Clothing </Text>
      <Image style={styles.logo} source={require('../../assets/images/cloth_logo.png')}  />
      <Text></Text>
      <Text style={styles.welltext}>{"\n"}Welcome To Zany Clothing ... </Text>
      <Text style={styles.introtext}>{"\n"}Zany is a luxury fashion brand. Enter a world of fashion and sophistication 
        tailored just for you. If you are looking for ever trendy fashion, our online store
         offers a diverse collection for every wardrobe.  </Text>
         
         <Text style={styles.introtext}>                    With high quality fabric and comfort clothes , We invite you to choose your favorite styles. 
           Embrace the latest fashion with Zany  online clothing store. {"\n"} {"\n"} </Text>
         
        <Button 
            title="Login Store "
            color="#FE6C92"
            onPress={()=>router.push('Home')} 
            
            />
        </View>
      ))}
      
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  nametext: {
    fontSize: 28,
    color: '#F34572',
    textAlign: 'center',
    
  },
  welltext: {
    fontSize: 22,
    color: 'pink',
    textAlign: 'center',
    
  },
  introtext: {
    fontSize: 15,
    color: '#3F3E3F',
    marginStart: 11,
    marginEnd: 11,
    //paddingBottom: 10,
    
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

