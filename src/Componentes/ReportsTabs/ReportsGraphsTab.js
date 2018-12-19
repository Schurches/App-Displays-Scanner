import React, { Component } from 'react';
import { StyleSheet,Image,View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import { VictoryBar, VictoryChart, VictoryPie } from "victory-native";
import { VictoryTheme } from "victory-core";

import {colorType as ColorType} from '../../Resources/Color';

export default class ReportsGraphsTab extends Component {
  render() {
    return (
      <Container style={styles.colorBackground}>
        <Button style ={styles.buttonLayout} block>
          <Icon name='plus' type='FontAwesome'  style={{fontSize:20, color: ColorType.BACKGROUND_PRIMARY}} />
        </Button>
        <Content>
          <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
            <VictoryBar
              style={{ data: { fill: "tomato", opacity: 0.5 }, labels: { fill: "white" } }}
              data={[
                { x: 15, y: 20, label: 1, fill: "red" },
                { x: 25, y: 30, label: 2, fill: "orange" },
                { x: 35, y: 65, label: 3, fill: "gold" },
                { x: 40, y: 50, label: 4, fill: "blue" },
                { x: 45, y: 40, label: 5, fill: "cyan" },
                { x: 50, y: 30, label: 6, fill: "green" }
              ]} />
          </VictoryChart>

          <VictoryPie
            labelRadius={50}
            style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold" } }}
            colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
            data={[
              { x: "Cats", y: 35 },
              { x: "Dogs", y: 40 },
              { x: "Birds", y: 55 }
            ]}
          />

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  colorBackground:{
    backgroundColor: ColorType.BACKGROUND_PRIMARY,
  },

  buttonLayout:{
    marginLeft: 40,
    marginRight: 40,
    marginTop: 15,
    marginBottom: 15,
    padding: 5,
    backgroundColor: ColorType.BUTTON_COLOR_PRIMARY
  },


});
