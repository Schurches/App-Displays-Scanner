import React, { Component } from 'react';
import { StyleSheet,Image,View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
export default class ReportsInfoTab extends Component {
  render() {
    return (
      <Container  style={styles.colorBackground}>
        <Content>
        <View style={styles.rowViewStyle}>
          <View style={{marginLeft:15, marginBottom:10}}>
            <Text style={styles.bigText}>
              3K
            </Text>
            <Text style={styles.smallText}>
              Numero de fotos
            </Text>
          </View>

          <View style={styles.containerRight}>
              <Button  onPress={this.onLoginPress} style ={styles.buttonLayout}>
                <Icon name='download' type='FontAwesome'  style={{fontSize:17, color: '#121212'}} />
              </Button>
          </View>

        </View>

        <View style={styles.rowViewStyle}>
          <View style={{marginLeft:15,marginBottom:5}}>
            <Text style={styles.bigText}>
              13K
            </Text>
            <Text style={styles.smallText}>
              Datos Identificados
            </Text>
          </View>
        </View>

        <View style={styles.rowViewStyle}>
          <View style={{flex:1,marginLeft:15}}>
            <Text style={styles.midText}>
              12K
            </Text>
            <Text style={styles.smallText}>
              Corectamente
            </Text>
          </View>
          <View style={{flex:1,marginLeft:15}}>
            <Text style={styles.midText}>
              1K
            </Text>
            <Text style={styles.smallText}>
              Erroneos
            </Text>
          </View>
        </View>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({

  colorBackground:{
    backgroundColor: "#121212",
  },

  buttonLayout:{
    margin:0,
    padding:0,
    backgroundColor: "#85c990"
  },

  containerCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  containerRight: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 10,
  },

  headerStyle: {
    backgroundColor: "#121212",
    elevation: 0,
    borderBottomWidth: 0,
  },

  rowViewStyle:{
    flex:1,
    flexDirection: 'row',
  },

  smallText:{
    fontSize: 10,
    color: '#818181',
  },

  fillText:{
    fontSize: 18,
    color: '#c6c6c6',
  },


  normalText:{
    fontSize: 13,
    fontWeight: 'bold',
    color: '#c6c6c6',
  },

  midText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#c6c6c6',
  },

  bigText:{
    fontSize: 35,
    fontWeight: 'bold',
    color: '#c6c6c6',
  },

  titleText:{
    fontSize: 13,
    fontWeight: 'bold',
    textAlign:'center',
    color: '#c6c6c6'
  },

});
