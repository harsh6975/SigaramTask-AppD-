import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Grid() {
  const [boxStates, setBoxStates] = useState(Array(16).fill("blue"));
  const [preBoxState, setPreBoxState] = useState([]);

  // on pressing changing the color
  const boxPressHandler = (index) => {
    const newBoxStates = [...boxStates];
    var newPreBoxState = [...preBoxState];

    // if already red then do nothing
    for (let i = 0; i < newPreBoxState.length; i++) {
      if (newPreBoxState[i] == index) {
        return;
      }
    }

    // if length is greater than two then we will remove the 1st index
    if (newPreBoxState.length >= 2) {
      var lastIndex = newPreBoxState[0];
      newPreBoxState.shift();
      newBoxStates[lastIndex] = "blue";
    }
    // updating the current state
    newBoxStates[index] = "red";
    newPreBoxState.push(index);
    setPreBoxState(newPreBoxState);
    setBoxStates(newBoxStates);
  };

  return (
    <View style={styles.container}>
      {boxStates.map((color, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => boxPressHandler(index)}
          style={[styles.box, color == "blue" ? styles.blue : styles.red]}
        >
          <Text></Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 20,
  },
  box: {
    width: "25%",
    height: "25%",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
  blue: {
    backgroundColor: "blue",
  },
  red: {
    backgroundColor: "red",
  },
});
