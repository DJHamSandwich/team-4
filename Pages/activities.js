import React from "react";
import { Text, View } from "react-native";
import { Card, ThemeProvider } from "react-native-elements";
import { BarChart, PieChart } from "react-native-chart-kit";
import RNPickerSelect from 'react-native-picker-select';

const Activities = () => {
    return (
        <ThemeProvider>
            <View>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                    ]}
                />
                <Card style={{ width: 2000 }}>
                    <Text style={{ margin: 20 }}>
                        <h2>'BARCHART or something'</h2>
                        {/* <BarChart></BarChart> */}
                    </Text>
                </Card>
            </View>
        </ThemeProvider>
    );
};
export default Activities;
