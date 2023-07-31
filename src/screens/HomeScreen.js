import { View, Text } from 'react-native'
import React from 'react'
import  AntDesign  from '@expo/vector-icons/AntDesign';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RideScreen
 from './RideScreen';
import PackageScreen from './PackageScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context'
const Tab = createMaterialTopTabNavigator();
const HomeScreen = () => {
  const insets = useSafeAreaInsets()
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
      tabBarStyle: { backgroundColor: 'white' ,marginTop: insets.top  ,right:20,left:20,borderRadius:10, position:'absolute'}
    } }
    >
    <Tab.Screen name="Ride" component={RideScreen} />
    <Tab.Screen name="Package" component={PackageScreen} />
  </Tab.Navigator>
  )
}

export default HomeScreen;
