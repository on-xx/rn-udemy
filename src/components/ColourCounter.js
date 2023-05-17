import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const ColourCounter = ({ colour, onIncrease, onDecrease, value }) => {
  return (
    <View style={styles.container}>
      <Text>
        {colour} : {value}
      </Text>
      <Button title={`Increase ${colour}`} onPress={() => onIncrease()} />
      <Button title={`Decrease ${colour}`} onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default ColourCounter;
