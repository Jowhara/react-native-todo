import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View>
          <Ionicons name="ios-checkbox" style={styles.checkbox} />
        </View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  check: {
    paddingTop: 1,
    paddingLeft: 1,
    fontSize: 23,
  },
  checkbox: {
    fontSize: 25,
    width: 24,
    height: 24,
    borderRadius: 5,
    marginRight: 15,
    color: "#93C5FD",
  },
  itemText: {
    maxWidth: "80%",
  },
});

export default Task;
