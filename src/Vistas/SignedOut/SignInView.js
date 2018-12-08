import React, { Component } from 'react';
import { StyleSheet,StatusBar,Image,View } from 'react-native';
import { Container,Card,Label,Header,Form,Content,Button,Text,CardItem,Item,Body,Title,Input,Icon,Right } from 'native-base';

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
        <StatusBar backgroundColor={"#202020"} barStyle="light-content"/>
        <Content style ={styles.contentStyle}>


          <View style={styles.containerCentered}>
              <Text style={{fontSize: 15,fontWeight: 'bold',color: '#c6c6c6', textAlign:'center'}}>Iniciar Sesion</Text>
          </View>

          <Form>
            <Item style ={styles.inputLayout}>
              <Input style={{fontSize: 13, fontWeight: 'bold', color: '#c6c6c6'}}  placeholder="Correo Electronico" onChangeText={ (email) => {this.setState({email: email})} }/>
            </Item>
            <Item style ={styles.inputLayout}>
              <Input style={{fontSize: 13, fontWeight: 'bold', color: '#c6c6c6'}}  secureTextEntry={true} placeholder="Contraseña"  onChangeText={ (passw) => {this.setState({password: passw})} } />
            </Item>
          </Form>

          <Button  onPress={this.onLoginPress} style ={styles.buttonLayout} block>
            <Text uppercase={false} style={{fontSize: 15,fontWeight: 'bold',color: '#ffffff'}}> Iniciar </Text>
          </Button>

          <Card  transparent>
            <CardItem style={styles.colorBG} header>
              <Text uppercase={false} style={{fontSize: 13,fontWeight: 'bold',color: '#c6c6c6'}}>¿No tienes cuenta?</Text>
                <Button onPress={this.onPressJoinButton}  transparent>
                  <Text uppercase={false} style={{fontSize: 13,fontWeight: 'bold',color: '#85c990'}}>Registrate</Text>
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

  containerCentered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
  },

  colorBG:{
    backgroundColor: "#121212"
  },

  cardMainLayout:{
     borderRadius: 15,
  },

  contentStyle:{
     padding: 25,
     marginTop:50,
  },

  errorMessage:{
    color: '#F44336',
    fontSize: 13,
  },

  inputLayout:{
    marginRight:15,
    borderColor: 'transparent',
  },
});
