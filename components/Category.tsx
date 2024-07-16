import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Category = () => {
  return (
    <View>
      <Text style={styles.CategoryText}>Trending Now</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
    CategoryText: {
        fontSize: 20,
        fontWeight: 300,
        color: 'white',
        backgroundColor: '#F34572',
        textAlign: 'center',
        borderRadius: 20,
        marginHorizontal: 10,
        paddingHorizontal: 20,
    },
});