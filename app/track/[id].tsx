import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";


const Transaction = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Transaction[Id]</Text>
    </View>
  )
}
export default Transaction;
const styles = StyleSheet.create({})
