import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Grid from "./Grid";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sigaram Task</Text>
      <Grid />
      <Text style={styles.name}>By: Harsh Sinha</Text>
      <Text style={styles.date}>01 Mar 2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  date: {
    fontSize: 12,
  },
});
