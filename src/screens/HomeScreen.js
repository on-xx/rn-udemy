import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Button
        title="Go To Components Demo"
        onPress={() => navigation.navigate("Components")}
      />

      <Button
        title="Go To List Demo"
        onPress={() => navigation.navigate("List")}
      />

      <Button
        title="Go To Image Demo"
        onPress={() => navigation.navigate("Image")}
      />

      <Button
        title="Go To Count Demo"
        onPress={() => navigation.navigate("Count")}
      />

      <Button
        title="Go To Colour Demo"
        onPress={() => navigation.navigate("Colour")}
      />

      <Button
        title="Go To Square Demo"
        onPress={() => navigation.navigate("Square")}
      />

      <Button
        title="Go To Text Demo"
        onPress={() => navigation.navigate("Text")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
