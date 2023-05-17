import React from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";
import { useState } from "react";

const ColourScreen = () => {
  const [colours, setColours] = useState([]);
  console.log(colours);

  return (
    <View>
      <Button
        title="Add a Colour"
        onPress={() => {
          setColours([...colours, randomRGB()]);
        }}
      />

      <FlatList
        keyExtractor={(item) => item}
        data={colours}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColourScreen;
