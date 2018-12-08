import React from 'react';
import { StyleSheet } from 'react-native';
import { Root,Spinner,Text, View, Container, Content, Header, Left, Body, Button, Title, Icon, Right  } from "native-base";
import { Font, AppLoading } from "expo";
import {AppContainer} from './src/Router/Router';
import Vista from './vista'
import AuthLoadingView from './src/Vistas/Auth/AuthLoadingView'
import SignInView from './src/Vistas/SignedOut/SignInView'
import SignUpView from './src/Vistas/SignedOut/SignUpView'


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
       return (
        <Root>
          <AppLoading />
        </Root>
      );
    }


    return (
        <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
