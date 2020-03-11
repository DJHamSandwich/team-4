import React from "react";
import "react-native-gesture-handler";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Icon,
  Text,
  Body,
  Button,
  View
} from "native-base";

const HomePage = ({ navigation }) => {
  return (
    <>
      <Container
        style={{
          flex: "center",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Header />
        <Content>
          <Card style={{ width: 500 }}>
            <CardItem header>
              <View>
                <Text>Daily Activities</Text>
              </View>
            </CardItem>
            <CardItem>
              <Body>
                <View>
                  <Text>Put in activity icon</Text>
                </View>
              </Body>
            </CardItem>
            <CardItem footer>
              <View>
                <Text>
                  <Button transparent>
                    <Icon name="arrow-forward" />
                  </Button>
                </Text>
              </View>
            </CardItem>
          </Card>
          <Card style={{ width: 500 }}>
            <Button
              onPress={() => navigation.navigate("BreakfastScreen")}
              iconLeft
            >
              <Icon name="home" />
              <Text>Breakfast</Text>
            </Button>
            <Button onPress={() => navigation.navigate("LunchScreen")} iconLeft>
              <Icon name="home" />
              <Text>Lunch</Text>
            </Button>
            <Button
              onPress={() => navigation.navigate("DinnerScreen")}
              iconLeft
            >
              <Icon name="home" />
              <Text>Dinner</Text>
            </Button>
          </Card>
        </Content>
      </Container>
    </>
  );
};
export default HomePage;

// {
/* const data = {
  labels: ["0", "Now", "24(h)"],
  datasets: [
    {
      data: [20, 45, 28]
    }
  ]
};

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientTo: "#08130D",
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
};

const list = [
  {
    name: "Breakfast",
    avatar_url: "https://www.youtube.com/",
    subtitle: "Bread"
  },
  {
    name: "Lunch",
    avatar_url: "https://www.youtube.com/",
    subtitle: "Instant Noodles"
  },
  {
    name: "Tea",
    avatar_url: "https://www.youtube.com/",
    subtitle: "Ricola"
  },
  {
    name: "Dinner",
    avatar_url: "https://www.youtube.com/",
    subtitle: "Fisherman Friends"
  }
]; */
// }

// {
/* // const styles = StyleSheet.create({ */
// }
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
