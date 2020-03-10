import React from "react";
import { Text, View } from "react-native";
import { Card, ThemeProvider } from "react-native-elements";
import { BarChart, PieChart } from "react-native-chart-kit";

const Homepage = () => {
  return (
    <ThemeProvider>
      <View>
        <Text>
          <h1>Welcome back, user!</h1>{" "}
        </Text>
        <Card style={{ width: 2000 }}>
          <Text style={{ margin: 20 }}>
            <h2>Activity Tracker</h2>
            <BarChart></BarChart>
          </Text>
        </Card>
      </View>
    </ThemeProvider>
  );
};
export default Homepage;
