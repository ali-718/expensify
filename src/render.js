import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";

const array = [
  {
    name: "ali haider"
  },
  {
    name: "faraz"
  },
  {
    name: "krishna"
  }
];
export default class Render extends Component {
  render() {
    return (
      <ScrollView>
        {array.map((item, i) => {
          <View
            key={i}
            style={{
              marginTop: 20,
              width: "100%",
              height: 100,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>{item.name}</Text>
          </View>;
        })}
      </ScrollView>
    );
  }
}
