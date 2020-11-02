import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headerStyle}>Image Screen</Text>
      <ImageDetail src={require("../../assets/beach.jpg")} title="beach" />
      <ImageDetail src={require("../../assets/forest.jpg")} title="forest" />
      <ImageDetail src={require("../../assets/mountain.jpg")} title="mountain" />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 20,
    marginVertical: 10,
  },
  textStyle: {
    marginVertical: 5,
  },
  viewStyle: {
    margin: 10,
  },
});

export default ImageScreen;
