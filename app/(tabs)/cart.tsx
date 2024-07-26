import { View ,Text , StyleSheet ,Image, TouchableOpacity ,FlatList} from "react-native";
import React from 'react'
import Header from '@/components/Header'
import CartCard from "@/components/CartCard";


const cart = () => {
  return (
    <View style={{height:'100%',backgroundColor: '#FCEEF2', paddingTop: 30  }}>
      
       <View style={styles.headerContainer}>
          <Header isCart={true}/>
       </View>
       
        <FlatList 
        data={[1,2,3,4,5]}ListHeaderComponent={
      <>
      </>
      } 
        renderItem={CartCard}
        ListFooterComponent={
          <>
                <View style={styles.TotalContainer}>
        <View style={styles.Totaltxt}>
            <Text style={styles.txt}>Total:</Text>
            <Text style={styles.txt}>LKR 8,200.00</Text>
        </View>
        <View style={styles.Totaltxt}>
            <Text style={styles.txt}>Shipping:</Text>
            <Text style={styles.txt}>LKR 0.00</Text>
        </View>
       </View>
       <View style={styles.line}/>
       <View style={styles.Totaltxt}>
            <Text style={styles.txt}>Grand Total:</Text>
            <Text style={[styles.txt, {color: "black", fontWeight: "500"}]}>LKR 8,200.00</Text>
      </View>
          </>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
      />

        <TouchableOpacity style={styles.checkOutContainer}>
          <Text style={styles.checkTxt}>CheckOut</Text>
        </TouchableOpacity>

    </View> //lineGardient
  );
};

export default cart;

const styles = StyleSheet.create({
  headerContainer: {
    marginVertical: 10 ,
    marginBottom: 20,
  },
  TotalContainer: {
    marginTop: 40,
  },
  Totaltxt: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 6,
  },
  txt: {
    color: '#797577',
    fontSize: 16, 
  },
  line: {
    borderWidth: 1,
    borderColor: '#9A9C9C',
    marginVertical: 10,
    marginStart: 20,
    marginEnd: 16,

  },
  checkOutContainer: {
    backgroundColor: '#FE6C92',
    width: "100%",
    marginVertical: 10,
    borderRadius: 80,
    // marginStart: 20,
    // marginEnd: 16,
  },
  checkTxt: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    padding: 6,
    fontWeight: "500",
  },
  
});