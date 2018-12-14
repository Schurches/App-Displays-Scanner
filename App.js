import React from 'react';
import { StyleSheet } from 'react-native';
import { Root,Spinner,Text, View, Container, Content, Header, Left, Body, Button, Title, Icon, Right  } from "native-base";
import { Font, AppLoading } from "expo";
import {AppContainer} from './src/Router/Router';


console.disableYellowBox = true;

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
