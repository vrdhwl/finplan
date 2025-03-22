import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1">
      <View className="bg-dark-200 w-screen h-[40%]">
        <Text className="text-texty m-auto text-7xl text-bold">
          20,000
        </Text>
      </View>
      <View className=""></View>
      <View className="bg-dark-100 justify-center items-center h-[60%] w-screen flex flex-row flex-wrap gap-2">
        <Text className="rounded-xl w-[45%] text-texty p-5 bg-green-400 text-center">from</Text>
        <Text className="rounded-xl w-[45%] text-texty p-5 bg-green-400 text-center">to</Text>
        <Text className="rounded-3xl w-[30%] text-texty p-5 bg-accent text-center">1</Text>
        <Text className="rounded-3xl w-[30%] text-texty p-5 bg-accent text-center">2</Text>
        <Text className="rounded-3xl w-[30%] text-texty p-5 bg-accent text-center">3</Text>
        <Text className="rounded-3xl w-[30%] text-texty p-5 bg-accent text-center">4</Text>
        <Text className="rounded-3xl w-[30%] text-texty p-5 bg-accent text-center">5</Text>
        <Text className="rounded-3xl w-[30%] text-texty p-5 bg-accent text-center">6</Text>
        <Text className="rounded-3xl w-[30%] text-texty p-5 bg-accent text-center">7</Text>
        <Text className="rounded-3xl w-[30%] text-texty p-5 bg-accent text-center">8</Text>
        <Text className="rounded-3xl w-[30%] text-texty p-5 bg-accent text-center">9</Text>
        <Text className="rounded-3xl w-[30%] text-texty p-5 bg-accent text-center">.</Text>
        <Text className="rounded-3xl w-[30%] text-texty p-5 bg-accent text-center">0</Text>
        <Text className="rounded-3xl w-[30%] text-texty p-5 bg-accent text-center">clear</Text>
        <Text className="rounded-xl w-[95%] text-texty p-5 bg-green-400 text-center">1</Text>
      </View>
    </View>
  );
}
