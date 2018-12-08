import React from 'react';
import {  ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View, } from 'react-native';
import {  Spinner } from 'native-base';

export default class AuthLoadingView extends React.Component {
  constructor(props) {
    super(props);
    this._AsyncLoading();
  }


  _AsyncLoading = async () => {
    const userToken = true;
    //Verificar aqui si el usuario esta logueado o no

    this.props.navigation.navigate(userToken ? 'SignedIn' : 'SignedOut');
  };


  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#202020"} barStyle="light-content"/>
        <Spinner color='#85c990' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: "#121212"
  },
});
