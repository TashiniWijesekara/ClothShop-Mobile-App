import { View, Text, requireNativeComponent } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from "../ProductDetails";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home(){
  return(
    <View>
      <Text>Home</Text>
    </View>
  );
}
const MyHomeStack = ()=>{
    return(
      <Stack.Navigator screenOptions={{
        headerShown:false,
      }}>
        <Stack.Screen name="HOME" component={Home} />
        <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetails} />
      </Stack.Navigator>
    );
  };

const TabLayout = () => {
  return (
    
  //<NavigationContainer>
    //<Tab.Navigator>
      <Tabs screenOptions={{
            headerShown:false,
            tabBarActiveTintColor: '#F34572',

    }}  >

     <Tabs.Screen name="index"
     options={{
      tabBarLabel: ({ focused }) => (
        <Text style={{fontSize:10, color: focused ? '#F34572' : 'gray'}}> Login </Text>
      ),
      tabBarIcon:({size,focused,color})=> {
        return<AntDesign name={"login"} size={size} color={color}/>
      },
     }} 
     />
     
     <Tabs.Screen name="Home" 
      //component={MyHomeStack} 
     options={{
      // tabBarLabel: ({ focused }) => (
      //   <Text style={{ }}> </Text>
      // ),
      tabBarIcon:({size,focused,color})=> {
        return<Entypo name={"home"} size={size} color={color}/>
      },
     }} 
     />
     
     <Tabs.Screen name="Order" 
     options={{
      // tabBarLabel: ({ focused }) => (
      //   <Text style={{ }}> </Text>
      // ),
        tabBarIcon:({size, color})=> (
          <MaterialIcons name={"reorder"} size={size} color={color} />
        ),
     }} 
     />
     <Tabs.Screen name="Cart" 
     options={{
      // tabBarLabel: ({ focused }) => (
      //   <Text style={{ }}> </Text>
      // ),
      tabBarIcon:({size, color})=> (
        <MaterialCommunityIcons name={"cart"} size={size} color={color} />
      ),
   }} 
     />
     <Tabs.Screen name="Account" 
      options={{
        // tabBarLabel: ({ focused }) => (
        //   <Text style={{ }}> </Text>
        // ),
      tabBarIcon:({size, color})=> (
        <FontAwesome6 name={"user"} size={size} color={color} />
      ),
   }} 
   />
      </Tabs>
   // </Tab.Navigator>
 // </NavigationContainer>

  );
};

export default TabLayout;