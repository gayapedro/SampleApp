import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.view1} />
      <View style={styles.view2} />
      <View style={styles.view3} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  view1: {
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "red",
    width: 50,
    height: 50,
  },
  view2: {
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "green",
    width: 50,
    height: 50,
    marginTop: 50,
  },
  view3: {
    borderWidth: 1,
    borderColor: "blue",
    backgroundColor: "blue",
    width: 50,
    height: 50,
  },
});

export default BoxScreen;
