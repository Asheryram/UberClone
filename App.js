import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import OnBoardingScreen from "./src/screens/OnBoardingScreen";
import MainComponent from "./src/components/MainComponent";


export default function App() {
  const Stack = createNativeStackNavigator();
  return (


    <MainComponent/>

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="OnBoardingScreen">
    //     <Stack.Screen
    //       name="OnBoardingScreen"
    //       component={OnBoardingScreen}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //     <Stack.Screen
    //       name="MainComponent"
    //       component={MainComponent}
    //       options={{
    //         headerShown: false,
    //       }}
    //     />
    //   </Stack.Navigator>

    // </NavigationContainer>
  );
}
