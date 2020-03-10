import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "react-native-elements";
import Profile from './Pages/profile';

export default function App() {
  return (
    <ThemeProvider>
      {" "}
      <View style={styles.container}>
        <Profile />
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
