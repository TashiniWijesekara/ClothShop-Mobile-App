import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
     <Tabs.Screen name="index" />
     <Tabs.Screen name="order" />
     <Tabs.Screen name="cart" />
     <Tabs.Screen name="account" />
    </Tabs>
  );
}
