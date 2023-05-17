import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.count < 0
        ? state
        : { ...state, count: state.count + action.payload };
    case "DECREMENT":
      return state.count === 0
        ? state
        : { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View style={styles.container}>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({
            type: "INCREMENT",
            payload: 1,
          });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({
            type: "DECREMENT",
            payload: 1,
          });
        }}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CounterScreen;
