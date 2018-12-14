import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Content, Form, Label, Item, Input, Button } from 'native-base';
import {Row, Col, Grid} from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';

const displays = [
  {
    text: 'Generic Display 1',
    name: 'Disp1',
    image: require('../../Imagenes/rage_chick.png'),
  },
  {
    text: 'Generic Display 2',
    name: 'Disp2',
    image: require('../../Imagenes/sad_chick.png'),
  },
  {
    text: 'Industrial Corporative Display',
    name: 'Disp3',
    image: require('../../Imagenes/stress_chick.png'),
  },
];
export default class HomeView extends Component {

  renderDisplayInfo = (item) => {
    return(
      displays.map(display => (
        <View style={{flex:1, flexWrap:'wrap', alignItems:'center'}}>

          <View style={{marginBottom: 10, flexDirection:'row'}}>
            <View style={{backgroundColor:'#FFFFDD',flex:1, borderTopRightRadius:30, borderTopLeftRadius:30}}>
              <Text style={{fontSize: 20, fontWeight: 'bold',color: '#c6c6c6', textAlign:'center'}}>{display.text}</Text>
            </View>
          </View>

          <View style={{flex:1, flexDirection:'row'}}>

            <View style={{alignItems:'center', flex: 1, justifyContent: 'center'}}>

              <View style={{flex:1, justifyContent:'flex-end', marginBottom:10}}>
                <TouchableOpacity style={{alignItems:'center'}}>
                  <Image source={require('../../Imagenes/stress_chick.png')} />
                  <Text style={{ fontWeight: 'bold',color: '#c6c6c6', textAlign:'center'}}>Mediciones</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex:1,marginTop:10}}>
                <TouchableOpacity style={{alignItems:'center'}}>
                  <Image source={require('../../Imagenes/rage_chick.png')} />
                  <Text style={{ fontWeight: 'bold',color: '#c6c6c6', textAlign:'center'}}>Reporte</Text>
                </TouchableOpacity>
              </View>

            </View>

            <View style={{flex:1, justifyContent:'center'}}>
              <TouchableOpacity style={{alignItems:'center'}}>
                <Image source={require('../../Imagenes/sad_chick.png')} />
                <Text style={{ fontWeight: 'bold',color: '#c6c6c6', textAlign:'center'}}>Nueva toma</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>
      )));
  }


  render() {
    return (
      <Container style={{backgroundColor:'#FAFAFAFA'}}>

      <View style={{backgroundColor:'white',flex:3, margin:30, borderRadius:30, borderWidth:.5, borderColor:'#c2c2c2'}}>
        <Swiper loop={false}>
          {this.renderDisplayInfo()}
        </Swiper>

      </View>

        <View style={{ flex:1, flexDirection:'row', justifyContent:'center', paddingBottom:10}}>

          <View style={{flex:1, justifyContent:'flex-end'}}>
            <TouchableOpacity style={{alignItems:'center'}}>
              <Image source={require('../../Imagenes/rage_chick.png')} />
              <Text style={{ fontWeight: 'bold',color: '#c6c6c6', textAlign:'center'}}>Mosáico</Text>
            </TouchableOpacity>
          </View>

          <View style={{flex:1, justifyContent:'flex-end'}}>
            <TouchableOpacity style={{alignItems:'center'}}>
              <Image source={require('../../Imagenes/sad_chick.png')} />
              <Text style={{ fontWeight: 'bold',color: '#c6c6c6', textAlign:'center'}}>Nuevo Display</Text>
            </TouchableOpacity>
          </View>

          <View style={{flex:1, justifyContent:'flex-end'}}>
            <TouchableOpacity style={{alignItems:'center'}}>
              <Image source={require('../../Imagenes/stress_chick.png')} />
              <Text style={{ fontWeight: 'bold',color: '#c6c6c6', textAlign:'center'}}>Configuración</Text>
            </TouchableOpacity>
          </View>

        </View>

      </Container>
    );
  }
}
