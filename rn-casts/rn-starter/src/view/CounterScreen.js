import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [state, setstate] = useState(0);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headerStyle}>Counter Screen</Text>
      <Text>{state.toString()}</Text>
      <Button title="increase" onPress={() => setstate(state + 1)} />
      <Button title="decrease" onPress={() => setstate(state - 1)} />
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

export default CounterScreen;
