import React, { Component } from 'react';
import {StyleSheet,StatusBar } from 'react-native';
import { Container, Card, Label, View, Header, Form, Content, Left, Button, Text, CardItem, Item, Body, Title, Input, Icon, } from 'native-base';

import {colorType as ColorType} from '../../Resources/Color';

export default class SignUpView extends Component {

  state = {user: '', email: '', password1: '', password2: '', error: '', dbRequest: false}

  constructor(props){
    super(props);
  }

  onPressBack=()=>{
    this.props.navigation.goBack()
  }

  render() {
    return (
      <Container style={styles.colorBG}>
        <StatusBar backgroundColor={ColorType.BACKGROUND_SECONDARY} barStyle="light-content"/>
        <Content style ={styles.contentStyle}>

        <View style={{backgroundColor:ColorType.BACKGROUND_SECONDARY,padding:15,paddingBottom:20, margin:10, marginTop:0, borderRadius:10,}}>
          <View style={styles.containerCentered}>
            <Text style={styles.titleText}>Registro</Text>
          </View>

          <Form>
            <Item style ={styles.inputLayout}>
              <Input style={styles.inputText}  placeholder="Usuario" value={this.state.user} onChangeText={(user) => {this.setState({user: user})}}/>
            </Item>
            <Item style ={styles.inputLayout}>
              <Input style={styles.inputText}  placeholder="Correo Electronico" value={this.state.email} onChangeText={(email) => {this.setState({email: email})}}/>
            </Item>
            <Item style ={styles.inputLayout}>
              <Input style={styles.inputText}  placeholder="Contraseña" secureTextEntry={true} value={this.state.password1} onChangeText={(password1) => {this.setState({password1: password1})}}/>
            </Item>
            <Item style ={styles.inputLayout}>
              <Input style={styles.inputText}  placeholder="Confirmar Contraseña" secureTextEntry={true} value={this.state.password2} onChangeText={(password2) => {this.setState({password2: password2})}}/>
            </Item>
          </Form>
        </View>
        <Button onPress={this.onRegisterPress} style={styles.buttonLayout} block info>
          <Text uppercase={false} style={{fontSize: 18,fontWeight: 'bold',color: ColorType.TEXT_BUTTON_COLOR_PRIMARY,}}> Registrarse </Text>
        </Button>

        <Card  transparent>
          <CardItem style={styles.colorBG} header>
            <Text uppercase={false} style={styles.inputText}>¿Ya tienes una cuenta?</Text>
            <Button onPress={this.onPressBack}  transparent>
              <Text uppercase={false} style={{fontSize: 13,fontWeight: 'bold',color: ColorType.BUTTON_COLOR_PRIMARY}}>Inicia</Text>
            </Button>
          </CardItem>
          <CardItem style={styles.colorBG} header bordered>
            <Text style={styles.errorMessage}>{this.state.error}</Text>
          </CardItem>
        </Card>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonLayout:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    padding: 5,
    backgroundColor: ColorType.BUTTON_COLOR_PRIMARY,
  },

  inputText:{
    fontSize: 15,
    color: ColorType.TITLE_COLOR,
  },

  containerCentered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
  },

  titleText:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center',
    color: ColorType.TITLE_COLOR,
  },

  contentStyle:{
     padding: 25,
     marginTop:20,
  },

  cardMainLayout:{
     borderRadius: 15,
  },

  colorBG:{
    backgroundColor: ColorType.BACKGROUND_PRIMARY,
  },

  errorMessage:{
    color: ColorType.ERROR_BUTTON_COLOR,
  },

  inputLayout:{
    marginRight:15,
    borderColor: 'transparent',
  },
});
