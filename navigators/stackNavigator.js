import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../pages/homepage";
import Breakfast from "../pages/breakfast";
import Lunch from "../pages/lunch";
import Dinner from "../pages/dinner";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomePage}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="BreakfastScreen"
        component={Breakfast}
        options={{ title: "Breakfast" }}
      />
      <Stack.Screen
        name="LunchScreen"
        component={Lunch}
        options={{ title: "Lunch" }}
      />
      <Stack.Screen
        name="DinnerScreen"
        component={Dinner}
        options={{ title: "Dinner" }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
