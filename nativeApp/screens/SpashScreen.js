import React from "react";
import { StyleSheet, View, ActivityIndicator, Image } from "react-native";
import logo from "../assets/images/CFL_logo.jpg";
const SplashScreen = () => (
  <View style={styles.container}>
    <Image
      source={require("../assets/images/CFL_logo.jpg")}
      style={styles.image}
    />
    <ActivityIndicator />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
});

export default SplashScreen;
