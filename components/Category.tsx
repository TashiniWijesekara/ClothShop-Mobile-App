import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import React from 'react'

const Category = ({item, selectedCategory ,setSelectedCategory}) => {
  return (
    <TouchableOpacity onPress={() => setSelectedCategory(item)}>
    <View>
      <Text 
        style={[
          styles.CategoryText, 
          selectedCategory === item && {
            color: "white",
            backgroundColor: "#F34572",
            },
            ]}
          >
            {item}
          </Text>
    </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
    CategoryText: {
        fontSize: 20,
        fontWeight: 300,
        color: 'gray',
        backgroundColor: 'white',
        // backgroundColor: '#F34572',
        textAlign: 'center',
        borderRadius: 20,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});