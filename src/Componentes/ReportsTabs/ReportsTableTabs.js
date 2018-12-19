import React, { Component } from 'react';
import { StyleSheet, Image, View, ScrollView } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

import {colorType as ColorType} from '../../Resources/Color';

export default class ReportsTableTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9'],
      widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200]
    }
  }

  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }
    return (
      <Container  style={styles.colorBackground}>

          <View style={styles.container}>
             <ScrollView horizontal={true}>
               <View style={{borderColor: '#c6c6c6', borderTopWidth:1, borderBottomWidth:1, }}>
                 <Table borderStyle={{borderColor: 'transparent'}}>
                   <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.textHeader}/>
                 </Table>
                 <ScrollView style={styles.dataWrapper}>
                   <Table borderStyle={{borderColor: 'transparent'}}>
                     {
                       tableData.map((rowData, index) => (
                         <Row
                           key={index}
                           data={rowData}
                           widthArr={state.widthArr}
                           style={styles.row}
                           textStyle={styles.text}
                         />
                       ))
                     }
                   </Table>
                 </ScrollView>
               </View>
             </ScrollView>
           </View>

      </Container>
    );
  }
}

const styles = StyleSheet.create({

  colorBackground:{
    backgroundColor: ColorType.BACKGROUND_PRIMARY,
  },

  container: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
    backgroundColor: ColorType.BACKGROUND_PRIMARY,
  },

  header: {
    height: 50,
    backgroundColor:  ColorType.BACKGROUND_SECONDARY,
  },

  textHeader: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: ColorType.TITLE_COLOR,
  },

  text: {
    textAlign: 'center',
    color: ColorType.TITLE_COLOR,
  },

  dataWrapper: {
    marginTop: -1,
  },

  row: {
    height: 40,
    backgroundColor:  ColorType.BACKGROUND_PRIMARY,
  },

});
