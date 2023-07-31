import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";


const OnBoardingScreen = () => {

  return (
    <SafeAreaView className="flex-1 pt-14 items-center bg-sky-500">
      <Text className="text-5xl mt-10 text-white font-bold">Uber</Text>

      <View
        className="mt-12 items-center justify-center"
        style={{ marginTop: 100 }}
      >
        <Image
          className="mt-12 items-center bg-white justify-center"
          source={{uri:"https://rb.gy/97dju"}}
        />
      </View>

      <Text className="text-4xl text-white font-bold mt-40">Move With Safety</Text>
      <View className="mt-60">
      <TouchableOpacity
    className="bg-black h-10 w-80 items-center justify-center flex flex-row rounded"
    onPress={() => navigation.navigate("MainComponent")}
  >
    <Text className="text-2xl text-white ">Get Started</Text>
    <View className="h-5 w-5 ml-20 -mr-20">
      <AntDesign name="arrowright" size={24} color="white" />
    </View>
  </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
