import React from "react";
import { Text, StyleSheet, View } from "react-native";
import NavLink from "../components/NavLink";

const HomeScreen = ({ navigation: { navigate } }) => {
  const navigationHandler = (page) => {
    navigate(page);
  };

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Welcome home</Text>
      <NavLink handler={navigationHandler} pageName={"List"} />
      <NavLink handler={navigationHandler} pageName={"Components"} />
      <NavLink handler={navigationHandler} pageName={"Image"} />
      <NavLink handler={navigationHandler} pageName={"Counter"} />
      <NavLink handler={navigationHandler} pageName={"Color"} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: { width: "100%", alignItems: "center", justifyContent: "center" },
  text: {
    fontSize: 30,
    paddingVertical: 20,
  },
});

export default HomeScreen;
