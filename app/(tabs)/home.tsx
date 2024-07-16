import { View ,Text , StyleSheet, TextInput ,Image ,FlatList } from "react-native";
import React from 'react'
import LinearGradient from "react-native-linear-gradient";
import Header from "../../components/Header";
import { Fontisto } from "@expo/vector-icons";
import Category from "../../components/Category";

const categories = ['Trendig Now','All','New','Mens','Womens']
const Home = () => {
  return (
    <View style={{height:'100%',backgroundColor: '#FCEEF2',paddingTop:70 }}>  
      <Header/>
      <Text style={styles.topicText}>Choose Your Style </Text>

       <View style={styles.inputContainer}>
        <View style= {styles.iconContainer}>
          <Fontisto name={"search"} size={22} color={"gray"} />
        </View>
         <TextInput style={styles.textInput} placeholder="search"/>
       </View>


      {/* category section */}
      <FlatList 
          data={categories} 
          renderItem={Category} 
          keyExtractor={(item)=>item}
          horizontal={true}
          />

      <Category />

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
  },
  topicText: {
    fontSize: 25,
    color: '#FE6C92',
    marginTop: 25,
    // fontFamily:
  },
  inputContainer:{
    backgroundColor: 'white',
    height: 48,
    // width: '50%',
    borderRadius: 16,
    alignItems: 'center',
    flexDirection: "row",
    marginVertical: 20,
  },

  //search icon
  iconContainer: {
    marginHorizontal: 15,
    
  },

  textInput:{
    color: 'gray',
    fontSize: 16,
      flex: 1,
      //  borderWidth: 6,
       height: 40,
       borderColor: 'gray',
  },

});
