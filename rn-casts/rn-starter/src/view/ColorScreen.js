import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Adjuster from "../components/colors/Adjuster";

const ColorScreen = () => {
  const [colors, setColors] = useState({ Red: 0, Green: 0, Blue: 0 });
  const [colorIncrement, setColorIncrement] = useState("");

  const adjusterHandler = (color, isMore) => {
    if (
      (isMore && colors[color] + colorIncrement > 255) ||
      (!isMore && colors[color] - colorIncrement < 0)
    )
      return;
    setColors({
      ...colors,
      [color]: isMore
        ? colors[color] + Number(colorIncrement)
        : colors[color] - Number(colorIncrement),
    });
  };
  return (
    <View style={styles.viewStyle}>
      <TextInput
        style={styles.inputStyle}
        keyboardType="number-pad"
        onChangeText={(text) => setColorIncrement(Number(text))}
        placeholder="pass an increment"
        value={colorIncrement}
      />
      <Adjuster color="Red" handler={adjusterHandler} />
      <Adjuster color="Green" handler={adjusterHandler} />
      <Adjuster color="Blue" handler={adjusterHandler} />
      <View
        style={{
          backgroundColor: `rgb(${colors.Red},${colors.Green},${colors.Blue})`,
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: { width: 150, height: 40, borderColor: "gray", borderWidth: 1 },
  textStyle: {
    marginVertical: 5,
  },
  viewStyle: {
    margin: 10,
    width: "90%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default ColorScreen;
