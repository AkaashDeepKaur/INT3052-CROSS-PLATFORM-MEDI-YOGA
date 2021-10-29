import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function Login(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.toDoList1}>To do list</Text>
      <View style={styles.usernameRow}>
        <Text style={styles.username}>Username</Text>
        <View style={styles.rect}></View>
      </View>
      <View style={styles.passwordRow}>
        <Text style={styles.password}>Password</Text>
        <View style={styles.rect1}></View>
      </View>
      <Text style={styles.login}>LOGIN</Text>
      <Image
        source={require("../assets/images/yoga1.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toDoList1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 20,
    width: 64,
    marginTop: 131,
    marginLeft: 155
  },
  username: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 5
  },
  rect: {
    width: 194,
    height: 37,
    backgroundColor: "#E6E6E6",
    marginLeft: 50
  },
  usernameRow: {
    height: 37,
    flexDirection: "row",
    marginTop: 83,
    marginLeft: 14,
    marginRight: 54
  },
  password: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 8
  },
  rect1: {
    width: 194,
    height: 37,
    backgroundColor: "#E6E6E6",
    marginLeft: 51
  },
  passwordRow: {
    height: 37,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 14,
    marginRight: 54
  },
  login: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -132,
    marginLeft: 168
  },
  image: {
    width: 98,
    height: 108,
    marginTop: -180,
    marginLeft: 139
  }
});

export default Login;
