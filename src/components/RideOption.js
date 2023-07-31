import { Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";


const RideOption = () => {
  return (
    <View className="flex flex-row bg-gray-300 ml-4 mr-4 h-12 items-center rounded-3xl">
    <TouchableOpacity className='border-r border-grey-100 pr-8'>
      <View className="flex flex-row ml-8">
        <Ionicons name="md-search-sharp" size={20} color="black" />
        <Text className="text-xl ml-4">Where to?</Text>
      </View>
    </TouchableOpacity>
    <View>
      <TouchableOpacity className="flex flex-row ml-8 pl-2 bg-white rounded-lg h-7 w-24 items-center">
        <Ionicons name="time" size={20} color="black" />
        <Text className="text- ml-2 mr-2">Now</Text>
        <Ionicons name="chevron-down" size={20} color="black" />
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default RideOption