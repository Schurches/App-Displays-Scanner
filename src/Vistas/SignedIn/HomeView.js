import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text,
   Left, Body, Icon, Content, Form, Label, Item, Input, Button } from 'native-base';
import {Row, Col, Grid} from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';
/*Color resources*/
import {BACKGROUND_PRIMARY,
  BACKGROUND_SECONDARY,
  ICON_COLOR,
  ICON_COLOR_SUCCESS,
  ICON_COLOR_DANGER,
  TITLE_COLOR,
  SUBTITLE_COLOR,
  PAGINATION_DOT_COLOR,
  PAGINATION_DOT_ACTIVE_COLOR,
  DISPLAY_OUTLINE} from '../../Resources/Color';

const displays = [
  {
    text: 'Generic Display 1',
    name: 'Disp1',
  },
  {
    text: 'Generic Display 2',
    name: 'Disp2',
  },
  {
    text: 'Industrial Corporative Display',
    name: 'Disp3',
  },
];
export default class HomeView extends Component {

  state = {currentDisplayPosition: 0, currentDisplayOnEdit:'', displayText:'', isScrollEnabled:true}

  constructor(props){
    super(props);
  }

  navigateToCamera = () => {
    this.props.navigation.navigate("CameraView");
  }

  navigateToReports = () => {
    this.props.navigation.navigate("ReportsView");
  }

  navigateToVariables = () => {
    //Navigate to variables
    //this.navigation.navigate("");
  }

  navigateToConfig = () => {
    Alert.alert('config view')
    //this.navigation.navigate("ReportsView");
  }

  arrangeMosaic = () => {
    Alert.alert('Arrange')
    //this.navigation.navigate("ReportsView");
  }

  onDisplayEdit = () => {
    currentDisplay = displays[this.state.currentDisplayPosition];
    this.setState({currentDisplayOnEdit: currentDisplay.text, isScrollEnabled:false, displayText: currentDisplay.text});
  }

  onDisplayAdd = () => {
    //Alert.alert('add')
    //this.props.navigation.navigate("SignInView");
  }

  onDisplayDelete = () => {
    //Alert.alert('delete')
    //this.props.navigation.navigate("SignUpView");
  }

  onIndexChangeUpdate = (position) => {
    this.setState({currentDisplayPosition: position});
  }

  onEditSave = () =>{
    if(this.state.displayText == ""){
      Alert.alert('El display debe llevar un nombre');
    }else{
      displays[this.state.currentDisplayPosition].text = this.state.displayText;
      this.setState({currentDisplayOnEdit: '', isScrollEnabled:true, displayText: ''});
    }
  }

  onEditCancel = () =>{
    this.setState({currentDisplayOnEdit: '', isScrollEnabled:true, displayText: ''});
  }

  isDisplayBeingEdited = (currentDisplay) =>{
    if(currentDisplay.text == this.state.currentDisplayOnEdit){
      return(
        <View style={{margin:10, flexDirection:'row', alignItems:'center'}}>
          <Input placeholder='Display title' value={this.state.displayText} onChangeText={ (text) => {this.setState({displayText: text})} } style={{fontSize: 20, fontWeight: 'bold', color:TITLE_COLOR}} />
          <TouchableOpacity onPress={this.onEditSave} style={{marginTop:10, marginBottom:10, marginLeft:10, marginRight:5}}>
            <Icon name='save' type='MaterialIcons' style={{color:ICON_COLOR_SUCCESS}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onEditCancel} style={{marginTop:10, marginBottom:10, marginLeft:5, marginRight:10}}>
            <Icon name='trash' style={{color:ICON_COLOR_DANGER}}/>
          </TouchableOpacity>
        </View>
      );
    }else{
      return(
        <View style={{margin:10, flexDirection:'row', justifyContent:'space-between'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: TITLE_COLOR, textAlign:'center'}}>{currentDisplay.text}</Text>
          <TouchableOpacity onPress={this.onDisplayEdit}>
            <Icon name='edit' type='Feather' style={{color:ICON_COLOR}}/>
          </TouchableOpacity>
        </View>
      );
    }
  }

  renderDisplayInfo = () => {
    return(
      displays.map(display => (

          <View style={styles.displayContainer}>

            <View style={{marginBottom: 10, flexDirection:'row'}}>
              <View style={{backgroundColor:BACKGROUND_SECONDARY,flex:1, borderTopRightRadius:15, borderTopLeftRadius:15}}>
                {this.isDisplayBeingEdited(display)}
              </View>
            </View>

            <View style={{flex:1, flexDirection:'row'}}>

              <View style={{alignItems:'center', flex: 1, justifyContent: 'center'}}>

                <View style={{flex:1, justifyContent:'flex-end', marginBottom:10}}>
                  <TouchableOpacity onPress={this.navigateToVariables} style={{alignItems:'center'}}>
                    <Icon name='assignment' type='MaterialIcons' style={styles.displayOptionIcons} />
                    <Text style={styles.displayOptionText}>Mediciones</Text>
                  </TouchableOpacity>
                </View>

                <View style={{flex:1, marginTop:10}}>
                  <TouchableOpacity onPress={this.navigateToReports} style={{alignItems:'center'}}>
                    <Icon name='assessment' type='MaterialIcons' style={styles.displayOptionIcons} />
                    <Text style={styles.displayOptionText}>Reporte</Text>
                  </TouchableOpacity>
                </View>

              </View>

              <View style={{flex:1, justifyContent:'center'}}>
                <TouchableOpacity onPress={this.navigateToCamera} style={{alignItems:'center'}}>
                  {/*<Image source={require('../../Imagenes/icon.png')} style={{width:96, height:96}} />*/}
                  <Icon name='camera' type='FontAwesome' style={styles.displayOptionIcons2} />
                  <Text style={styles.displayOptionText}>Nueva toma</Text>
                </TouchableOpacity>
              </View>

            </View>

          </View>

      )));
  }


  render() {
    return (
      <Container style={{backgroundColor:BACKGROUND_PRIMARY}}>

      <View style={{flex:3}}>
        <Swiper
        scrollEnabled={this.state.isScrollEnabled}
        loop={false}
        dotColor={ICON_COLOR}
        activeDotColor="#FFFFFF"
        onIndexChanged={this.onIndexChangeUpdate.bind(this)}>
          {this.renderDisplayInfo()}
        </Swiper>

      </View>

      <View style={{ flex:1, flexDirection:'row', justifyContent:'center', paddingBottom:10}}>

          <View style={styles.displayConfigOptionsViewLayout}>
            <TouchableOpacity onPress={this.arrangeMosaic} style={{alignItems:'center'}}>
              <Icon name='dashboard' type='MaterialIcons' style={styles.displayConfigIcons} />
              <Text style={styles.displayConfigText}>Ver todos</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.displayConfigOptionsViewLayout}>
            <TouchableOpacity onPress={this.onDisplayAdd} style={{alignItems:'center'}}>
              <Icon name='add' type='MaterialIcons' style={styles.displayConfigIcons} />
              <Text style={styles.displayConfigText}>Nuevo Display</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.displayConfigOptionsViewLayout}>
            <TouchableOpacity onPress={this.navigateToConfig} style={{alignItems:'center'}}>
              <Icon name='gear' type='FontAwesome' style={styles.displayConfigIcons} />
              <Text style={styles.displayConfigText}>Configuración</Text>
            </TouchableOpacity>
          </View>

      </View>

      </Container>
    );
  }
}

const styles = StyleSheet.create({

  displayConfigIcons:{
    fontSize:48,
    color:ICON_COLOR,
  },

  displayConfigText:{
     fontWeight: 'bold',
     color: TITLE_COLOR,
     textAlign:'center',
  },

  displayOptionIcons:{
    fontSize:48,
    color:ICON_COLOR,
  },

  displayOptionIcons2:{
    fontSize:96,
    color:ICON_COLOR,
  },

  displayOptionText:{
     fontWeight: 'bold',
     color: TITLE_COLOR,
      textAlign:'center'
  },

  displayEditIcon:{
    color:ICON_COLOR_SUCCESS
  },

  displayCancelIcon:{
    color:ICON_COLOR_DANGER
  },

  displayConfigOptionsViewLayout:{
    flex:1,
    justifyContent:'flex-end',
  },

  displayContainer:{
    flex:1,
    backgroundColor:BACKGROUND_SECONDARY,
    marginTop: 50,
    marginHorizontal:15,
    borderRadius:15,
    borderWidth:.5,
    borderColor:DISPLAY_OUTLINE,
    flexWrap:'wrap',
    alignItems:'center'

  }





});
