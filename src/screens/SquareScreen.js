import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ColourCounter from "../components/ColourCounter";
import { useReducer } from "react";

const COLOUR_INCREMENT = 15;
const initialState = { red: 0, green: 0, blue: 0 };

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number}
  // action === { type: 'CHANGE_RED' || 'CHANGE_GREEN' || 'CHANGE_BLUE', payload: 15 || -15}

  switch (action.type) {
    case "CHANGE_RED":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "CHANGE_GREEN":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "CHANGE_BLUE":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { red, green, blue } = state;

  return (
    <View style={styles.container}>
      <ColourCounter
        colour="Red"
        value={red}
        onIncrease={() => {
          dispatch({ type: "CHANGE_RED", payload: COLOUR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "CHANGE_RED", payload: -1 * COLOUR_INCREMENT });
        }}
      />
      <ColourCounter
        colour="Green"
        value={green}
        onIncrease={() => {
          dispatch({ type: "CHANGE_GREEN", payload: COLOUR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "CHANGE_GREEN", payload: -1 * COLOUR_INCREMENT });
        }}
      />
      <ColourCounter
        colour="Blue"
        value={blue}
        onIncrease={() => {
          dispatch({ type: "CHANGE_BLUE", payload: COLOUR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "CHANGE_BLUE", payload: -1 * COLOUR_INCREMENT });
        }}
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default SquareScreen;
