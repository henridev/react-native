import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ComponentScreen = (props) => {
  const name = "henri";
  return (
    <View style={styles.view}>
      <Text style={styles.text_1}>getting started with native react</Text>
      <Text style={styles.text_2}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text_1: {
    fontSize: 45,
  },
  text_2: {
    fontSize: 20,
  },
  view: {
    width: "100%",
  },
});

export default ComponentScreen;
