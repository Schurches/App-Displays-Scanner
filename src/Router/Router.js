import React from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import AuthLoadingView from '../Vistas/Auth/AuthLoadingView';
import SignInView from '../Vistas/SignedOut/SignInView';
import SignUpView from '../Vistas/SignedOut/SignUpView';

export const SignedIn = createStackNavigator({
  //Aqui pondria el home
  SignInView:{
    screen:SignInView,
    navigationOptions:{
      header:null,
    },
  },
  //Si tan solo tuviera Uno :(
},

{
  cardStyle: {
    opacity: 1,
  }
}

);

export const SignedOut = createStackNavigator({
  SignInView:{
    screen:SignInView,
    navigationOptions:{
      header:null,
    },
  },
   SignUpView:{
    screen: SignUpView,
    navigationOptions:{
      header:null,
    },
  }
},

{
  cardStyle: {
    opacity: 1,
  }
}

);


 export const AppContainer =  createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingView,
    SignedIn: SignedIn,
    SignedOut: SignedOut,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
