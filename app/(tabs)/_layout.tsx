import { Entypo } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs>
     <Tabs.Screen name="home"
     options={{
      tabBarIcon:({size,focused,color})=> {
        return<Entypo name={"home"} size={size} color={color}/>
      },
     }} 
     />
     <Tabs.Screen name="order" 
     options={{
        tabBarIcon:({size, color})=> (
          <MaterialIcons name={"reorder"} size={size} color={color} />
        ),
     }} 
     />
     <Tabs.Screen name="cart" 
     options={{
      tabBarIcon:({size,color})=> {
        return<Entypo cart={""} size={25}/>
      },
     }} 
     />
     <Tabs.Screen name="account" />
    </Tabs>
  );
}
