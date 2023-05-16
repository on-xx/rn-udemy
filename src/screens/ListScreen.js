import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: 20 },
    { name: "Friend 2", age: 45 },
    { name: "Friend 3", age: 32 },
    { name: "Friend 4", age: 27 },
    { name: "Friend 5", age: 12 },
    { name: "Friend 6", age: 33 },
    { name: "Friend 7", age: 55 },
    { name: "Friend 8", age: 32 },
    { name: "Friend 9", age: 9 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
    borderWidth: 2,
    paddingVertical: 20,
    textAlign: "center",
  },
});

export default ListScreen;
