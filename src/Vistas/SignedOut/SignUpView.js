import React, { Component } from 'react';
import {StyleSheet,StatusBar } from 'react-native';
import { Container, Card, Label, View, Header, Form, Content, Left, Button, Text, CardItem, Item, Body, Title, Input, Icon, } from 'native-base';


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
        <StatusBar backgroundColor={"#202020"} barStyle="light-content"/>
        <Content style ={styles.contentStyle}>

        <View style={styles.containerCentered}>
          <Text style={{fontSize: 15,fontWeight: 'bold',color: '#c6c6c6', textAlign:'center'}}>Registro</Text>
        </View>

        <Form>
          <Item style ={styles.inputLayout}>
            <Input style={{fontSize: 13, fontWeight: 'bold', color: '#c6c6c6'}}  placeholder="Usuario" value={this.state.user} onChangeText={(user) => {this.setState({user: user})}}/>
          </Item>
          <Item style ={styles.inputLayout}>
            <Input style={{fontSize: 13, fontWeight: 'bold', color: '#c6c6c6'}}  placeholder="Correo Electronico" value={this.state.email} onChangeText={(email) => {this.setState({email: email})}}/>
          </Item>
          <Item style ={styles.inputLayout}>
            <Input style={{fontSize: 13, fontWeight: 'bold', color: '#c6c6c6'}}  placeholder="Contraseña" secureTextEntry={true} value={this.state.password1} onChangeText={(password1) => {this.setState({password1: password1})}}/>
          </Item>
          <Item style ={styles.inputLayout}>
            <Input style={{fontSize: 13, fontWeight: 'bold', color: '#c6c6c6'}}  placeholder="Confirmar Contraseña" secureTextEntry={true} value={this.state.password2} onChangeText={(password2) => {this.setState({password2: password2})}}/>
          </Item>
        </Form>

          <Button onPress={this.onRegisterPress} style={styles.buttonLayout} block info>
            <Text uppercase={false} style={{fontSize: 15,fontWeight: 'bold',color: '#ffffff'}}> Registrarse </Text>
          </Button>

          <Card  transparent>
            <CardItem style={styles.colorBG} header>
              <Text uppercase={false} style={{fontSize: 13,fontWeight: 'bold',color: '#c6c6c6'}}>¿Ya tienes una cuenta?</Text>
              <Button onPress={this.onPressBack}  transparent>
                <Text uppercase={false} style={{fontSize: 13,fontWeight: 'bold',color: '#85c990'}}>Inicia</Text>
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
    backgroundColor: "#85c990"
  },

  contentStyle:{
     padding: 25,
     marginTop:50,
  },

  cardMainLayout:{
     borderRadius: 15,
  },

  colorBG:{
    backgroundColor: "#121212"
  },

  errorMessage:{
    color: '#F44336',
  },

  inputLayout:{
    marginRight:15,
    borderColor: 'transparent',
  },
});
