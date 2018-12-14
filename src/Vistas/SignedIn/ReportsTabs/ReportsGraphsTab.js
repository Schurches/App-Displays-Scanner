import React, { Component } from 'react';
import { StyleSheet,Image,View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import { VictoryBar } from "victory-native";
export default class ReportsGraphsTab extends Component {
  render() {
    return (
      <Container style={styles.colorBackground}>
        <Content>
        <VictoryBar
        style={{ data: { fill: "tomato", opacity: 0.5 } }}
          data={[
            { x: 15, y: 20, label: 1, fill: "red" },
            { x: 25, y: 30, label: 2, fill: "orange" },
            { x: 35, y: 65, label: 3, fill: "gold" },
            { x: 40, y: 50, label: 4, fill: "blue" },
            { x: 45, y: 40, label: 5, fill: "cyan" },
            { x: 50, y: 30, label: 6, fill: "green" }
          ]} />

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  colorBackground:{
    backgroundColor: "#121212",
  },

});
