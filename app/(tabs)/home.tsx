import { StyleSheet, Text,TextInput, View , FlatList } from 'react-native'
import React, { useState } from 'react'
import Header from '@/components/Header'
import { Fontisto } from '@expo/vector-icons'
import Category from '@/components/Category'
import ProductCart from '@/components/ProductCart'

const categories = ["Trendig Now","All","New","Mens","Womens"];
const Home = () => {
  const[ selectedCategory,setSelectedCategory] = useState(null);
  return (
    <View style={{height:'100%',backgroundColor: '#FCEEF2',paddingTop:70 }}>
      <Header/>
      <Text style={styles.topicText}>Choose Your Style</Text>
      <View style={styles.inputContainer}>
      <View style= {styles.iconContainer}>
          <Fontisto name={"search"} size={22} color={"gray"} />
        </View>
         <TextInput style={styles.textInput} placeholder="search"/>
     </View>

     {/* category section */}
     <FlatList 
          data={categories} 
          renderItem={({item}) =>( 
            <Category 
                item={item} 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory}
                />
              )} 
          keyExtractor={(item)=>item}
          horizontal={true}
          showsHorizontalScrollIndicator={false}

          />
      {/* product list */}
        <View 
            style={{
              flexDirection: "row",
            }}
            >
          <ProductCart/>
          <ProductCart/>
        </View>

    </View> //lineGardient
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
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
   //borderWidth: 6,
     height: 40,
   borderColor: 'gray',
},

});