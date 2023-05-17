import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.textInputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length <= 5 && password.length > 0 ? (
        <Text style={styles.warningText}>
          Password must be longer than 5 characters
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
  },
  textInputStyle: {
    width: "100%",
    margin: 15,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  warningText: {
    color: "red",
  },
});

export default TextScreen;
