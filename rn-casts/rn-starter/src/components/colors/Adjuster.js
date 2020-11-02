import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Adjuster = ({ handler, color }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{color}</Text>
      <Button
        style={styles.buttonStyle}
        title={`More ${color}`}
        onPress={() => handler(color, true)}
      />
      <Button
        style={styles.buttonStyle}
        title={`Less ${color}`}
        onPress={() => handler(color, false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    margin: 10,
    width: "50%",
  },
  buttonStyle: {
    width: 100,
    padding: 10,
    margin: 10,
  },
  textStyle: {
    textAlign: "center",
    margin: 10,
  },
});

Adjuster.propTypes = {
  handler: PropTypes.func,
  color: PropTypes.string,
};

export default Adjuster;
