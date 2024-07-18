import { StyleSheet, Text,TextInput, View , FlatList } from 'react-native'
import React, { useState } from 'react'
import Header from '@/components/Header'
import { Fontisto } from '@expo/vector-icons'
import Category from '@/components/Category'
import ProductCart from '@/components/ProductCart'
import data from "../../data/products.json"

const categories = ["Trendig Now","All","New","Mens","Womens"];

const Home = () => {
    const [products, setProducts] = useState(data.products);
    const [ selectedCategory,setSelectedCategory] = useState("Mens");
    const [isLiked,setIsLiked] = useState(false);
    const hadleLiked = (item) =>{} 
  return (
    <View style={{height:'100%',backgroundColor: '#FCEEF2',paddingTop:70 }}>
      <Header/>

      {/* product list */}
      <FlatList 
          numColumns={2}
          ListHeaderComponent={
            <>
            <Text style={styles.topicText}>Choose Your Style</Text>
            {/* input container */}
          <View style={styles.inputContainer}>
          <View style= {styles.iconContainer}>

            {/* search bar */}
          <Fontisto name={"search"} size={22} color={"gray"} />
        </View>
         <TextInput style={styles.textInput} 
         placeholder="search"/>
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
        </>
          }
          // All details image, price .......
          data={products}   // data={[1, 2, 3, 4, 5, 6]} 
          renderItem={({item,index})=> (
          <ProductCart item={item} isLiked={isLiked} 
          setIsLiked={setIsLiked} />
           )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 150,
          }}
          />
      
        {/* <View 
            style={{
              flexDirection: "row",
              // justifyContent:  "space-between",
            }}
       >
          <ProductCart/>
          <ProductCart/>
        </View> */}

        {/* product list */}
      
        {/* <View 
            style={{
              flexDirection: "row",
              // justifyContent:  "space-between",
            }}
            >
          <ProductCart/>
          <ProductCart/>
        </View> */}

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
    marginTop: 10,
    marginLeft: 18,
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
    marginLeft: 10,
    marginEnd: 10,
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