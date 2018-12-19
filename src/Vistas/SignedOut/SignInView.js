import React, { Component } from 'react';
import { StyleSheet,StatusBar,Image,View } from 'react-native';
import { Container,Card,Label,Header,Form,Content,Button,Text,CardItem,Item,Body,Title,Input,Icon,Right } from 'native-base';

import {colorType as ColorType} from '../../Resources/Color';

export default class SignInView extends Component {
  state = {email: '', password: '', error: '', authRequest: false}

  constructor(props){
    super(props);
  }

  onPressJoinButton=()=>{
    this.props.navigation.navigate('SignUpView')
  }

  render() {
    return (
      <Container style={styles.colorBG}>
        <StatusBar backgroundColor={ColorType.BACKGROUND_SECONDARY} barStyle="light-content"/>
        <Content style ={styles.contentStyle}>

          <View style={{backgroundColor:ColorType.BACKGROUND_SECONDARY,paddingTop:15,paddingBottom:20, margin:10, marginTop:0, borderRadius:10,}}>
            <View style={styles.containerCentered}>
                <Text style={styles.titleText}>Iniciar Sesion</Text>
            </View>

            <Form>
              <Item style ={styles.inputLayout}>
                <Input style={styles.inputText}  placeholder="Correo Electronico" onChangeText={ (email) => {this.setState({email: email})} }/>
              </Item>
              <Item style ={styles.inputLayout}>
                <Input style={styles.inputText}  secureTextEntry={true} placeholder="Contraseña"  onChangeText={ (passw) => {this.setState({password: passw})} } />
              </Item>
            </Form>
          </View>

          <Button  onPress={this.onLoginPress} style ={styles.buttonLayout} block>
            <Text uppercase={false} style={{fontSize: 18,fontWeight: 'bold',color: ColorType.TEXT_BUTTON_COLOR_PRIMARY}}> Iniciar </Text>
          </Button>

          <Card  transparent>
            <CardItem style={styles.colorBG} header>
              <Text uppercase={false} style={styles.inputText}>¿No tienes cuenta?</Text>
                <Button onPress={this.onPressJoinButton}  transparent>
                  <Text uppercase={false} style={{fontSize: 13,fontWeight: 'bold',color: ColorType.BUTTON_COLOR_PRIMARY}}>Registrate</Text>
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
    color:  ColorType.TITLE_COLOR,
  },

  titleText:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center',
    color:  ColorType.TITLE_COLOR,
  },

  containerCentered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
  },

  colorBG:{
    backgroundColor:ColorType.BACKGROUND_PRIMARY
  },

  cardMainLayout:{
     borderRadius: 15,
  },

  contentStyle:{
     padding: 25,
     marginTop:20,
  },

  errorMessage:{
    color: ColorType.ERROR_BUTTON_COLOR,
    fontSize: 15,
  },

  inputLayout:{
    marginRight:15,
    borderColor: 'transparent',
  },
});
