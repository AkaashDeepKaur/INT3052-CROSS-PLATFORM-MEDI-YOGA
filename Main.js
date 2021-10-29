import React, { Component } from "react";
import { StyleSheet, View, TextInput, Image, Text } from "react-native";

function Main(props) {
  return (
    <View style={styles.container}>
      <View style={styles.textInputStack}>
        <TextInput
          placeholder="Welcome to Medi Yoga"
          textBreakStrategy="highQuality"
          keyboardAppearance="dark"
          placeholderTextColor="rgba(254,19,234,1)"
          autoCapitalize="sentences"
          style={styles.textInput}
        ></TextInput>
        <Image
          source={require("../assets/images/yoga.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <Text style={styles.loremIpsum2}></Text>
      <Text style={styles.toDoList}>To do list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    top: 0,
    left: 24,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 42,
    width: 151
  },
  image: {
    top: 21,
    left: 0,
    width: 200,
    height: 200,
    position: "absolute"
  },
  textInputStack: {
    width: 200,
    height: 221,
    marginTop: 225,
    marginLeft: 88
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -279,
    marginLeft: 152
  },
  toDoList: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 20,
    width: 64,
    marginTop: -36,
    marginLeft: 155
  }
});

export default Main;
