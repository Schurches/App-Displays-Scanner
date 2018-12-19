import React from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import AuthLoadingView from '../Vistas/Auth/AuthLoadingView';

import SignInView from '../Vistas/SignedOut/SignInView';
import SignUpView from '../Vistas/SignedOut/SignUpView';
import HomeView from '../Vistas/SignedIn/HomeView';
import ReportsView from '../Vistas/SignedIn/ReportsView';
import CameraView from '../Vistas/SignedIn/CameraView';

export const SignedIn = createStackNavigator({
  HomeView:{
  	screen:HomeView,
  	navigationOptions:{
  		header:null,
  	},
  },
  ReportsView:{
    screen:ReportsView,
    navigationOptions:{
      header:null,
    },
  },
  CameraView:{
    screen:CameraView,
    navigationOptions:{
      header:null,
    },
  },
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
