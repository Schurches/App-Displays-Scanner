import React, { Component } from 'react';
import { StyleSheet, StatusBar, Image, View } from 'react-native';
import { Container, Header, Title,Tab, Tabs, TabHeading, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import ReportsInfoTab from '../../Componentes/ReportsTabs/ReportsInfoTab';
import ReportsGraphsTab from '../../Componentes/ReportsTabs/ReportsGraphsTab';
import ReportsTableTabs from '../../Componentes/ReportsTabs/ReportsTableTabs';

import {colorType as ColorType} from '../../Resources/Color';

export default class ReportsView extends Component {
  render() {

    return (
      <Container  style={styles.colorBackground}>

        <Header hasTabs  style={styles.headerStyle}>
          <StatusBar backgroundColor={ColorType.BACKGROUND_SECONDARY} barStyle="light-content"/>
          <Left>
            <Button onPress={()=>{this.props.navigation.goBack()}}  transparent>
              <Icon style={{color: ColorType.ICON_COLOR, fontSize:17,}} name='chevron-left' type='FontAwesome' />
            </Button>
          </Left>
          <Body>
            <Title style={{color: ColorType.TITLE_COLOR}}>Reporte</Title>
          </Body>
        </Header>

        <Tabs locked tabBarPosition={'bottom'}>
          <Tab  heading={ <TabHeading style={{backgroundColor: ColorType.BACKGROUND_SECONDARY}}><Icon style={{color: ColorType.ICON_COLOR, fontSize:17,}} name="info" type='FontAwesome' /></TabHeading>}>
            <ReportsInfoTab />
          </Tab>

          <Tab  heading={ <TabHeading style={{backgroundColor: ColorType.BACKGROUND_SECONDARY}}><Icon style={{color: ColorType.ICON_COLOR, fontSize:17,}} name="area-chart" type='FontAwesome'/></TabHeading>}>
            <ReportsGraphsTab />
          </Tab>

          <Tab  heading={ <TabHeading style={{backgroundColor: ColorType.BACKGROUND_SECONDARY}}><Icon style={{color: ColorType.ICON_COLOR, fontSize:17,}} name="table" type='FontAwesome'/></TabHeading>}>
            <ReportsTableTabs />
          </Tab>
        </Tabs>

      </Container>
    );
  }
}


const styles = StyleSheet.create({

  colorBackground:{
    backgroundColor: ColorType.BACKGROUND_PRIMARY,
  },

  headerStyle: {
    backgroundColor: ColorType.BACKGROUND_SECONDARY,
    elevation: 0,
    borderBottomWidth: 0,
  },

});
