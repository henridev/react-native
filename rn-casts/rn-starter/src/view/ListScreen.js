import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const renderFunc = ({ item: { name, age } }) => {
  return (
    <Text style={styles.textStyle}>
      {name} of age {age.toString()}
    </Text>
  );
};

const ListScreen = () => {
  const friends = [
    { name: "no one", age: 66, id: 1 },
    { name: "blackhole", age: 77, id: 2 },
  ];
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headerStyle}>List Screen</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={friends}
        renderItem={renderFunc}
        keyExtractor={({ id }) => id}
      />
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

export default ListScreen;
