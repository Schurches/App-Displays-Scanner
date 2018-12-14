import React, { Component } from 'react';
import { StyleSheet,StatusBar,Image,View } from 'react-native';
import { Container, Header, Title,Tab, Tabs, TabHeading, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import ReportsInfoTab from './ReportsTabs/ReportsInfoTab';
import ReportsGraphsTab from './ReportsTabs/ReportsGraphsTab';
import ReportsTableTabs from './ReportsTabs/ReportsTableTabs';

export default class ReportsView extends Component {
  render() {

    return (
      <Container  style={styles.colorBackground}>

        <Header hasTabs   style={styles.headerStyle}>
          <StatusBar backgroundColor={"#202020"} barStyle="light-content"/>
          <Left>
            <Button transparent>
              <Icon style={{color: '#c6c6c6', fontSize:17,}} name='chevron-left' type='FontAwesome' />
            </Button>
          </Left>
          <Body>
            <Title style={{color: '#c6c6c6'}} >Reporte</Title>
          </Body>
        </Header>

        <Tabs tabBarPosition={'bottom'}>
          <Tab  heading={ <TabHeading style={{backgroundColor: '#202020'}} ><Icon style={{color: '#c6c6c6', fontSize:17,}} name="info" type='FontAwesome' /></TabHeading>}>
            <ReportsInfoTab />
          </Tab>

          <Tab  heading={ <TabHeading style={{backgroundColor: '#202020'}} ><Icon style={{color: '#c6c6c6', fontSize:17,}} name="area-chart" type='FontAwesome'/></TabHeading>}>
            <ReportsGraphsTab />
          </Tab>

          <Tab  heading={ <TabHeading style={{backgroundColor: '#202020'}} ><Icon style={{color: '#c6c6c6', fontSize:17,}} name="table" type='FontAwesome'/></TabHeading>}>
            <ReportsTableTabs />
          </Tab>
        </Tabs>

      </Container>
    );
  }
}


const styles = StyleSheet.create({

  colorBackground:{
    backgroundColor: "#121212",
  },

  headerStyle: {
    backgroundColor: "#202020",
    elevation: 0,
    borderBottomWidth: 0,
  },

});
