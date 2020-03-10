import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "react-native-elements";
import Homepage from "./team-4/Pages/homepage";

export default function App() {
  return (
    <ThemeProvider>
      {" "}
      <View style={styles.container}>
        <Homepage />
        {/* <Text>Hello World</Text> */}
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
