import React from "react";
import Home from "../screen/Home";
import Nutrition from "../screen/Nutrition";
import DetailPage from "../screen/DetailPage";
import Yoga from "../screen/Yoga";
import ChatScreen from "../screen/ChatScreen";
import SubscriptionScreen from "../screen/SubscriptionScreen";
import ChatofflineScreen from "../screen/ChatofflineScreen";
import musicplayer from "../screen/musicplayer"
import { createStackNavigator } from "@react-navigation/stack";
import Meditation from "../screen/Meditation";
const HomeStack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={Home} />
      <HomeStack.Screen name="NutritionScreen" component={Nutrition} />
      <HomeStack.Screen name="DetailPageScreen" component={DetailPage} />
      <HomeStack.Screen name="Yoga" component={Yoga} />
      <HomeStack.Screen name="ChatScreen" component={ChatScreen} />
      <HomeStack.Screen name="Meditation" component={Meditation} />
      <HomeStack.Screen name="musicplayer" component={musicplayer} />
      <HomeStack.Screen
        name="ChatofflineScreen"
        component={ChatofflineScreen}
      />
      <HomeStack.Screen
        name="SubscriptionScreen"
        component={SubscriptionScreen}
      />
    </HomeStack.Navigator>
  );
}
