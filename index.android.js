/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import App from './src/App';
import FlexPractice from './src/components/Index/FlexPractice';
import BeerList from './src/components/BeerList/BeerList';
import BeerEvents from './src/components/BeerEvents/BeerEvents';
import LoginSignup from './src/components/LoginSignup/LoginSignup';
import About from './src/components/About/About';
import LoyaltyProgram from './src/components/Loyalty/LoyaltyProgram';

const RouterWithRedux = connect()(Router);
const store = compose(applyMiddleware(ReduxThunk))(createStore)(reducers);

export default class SideMenu extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux sceneStyle={{ paddingTop: 50 }}>
          <Scene 
              component={FlexPractice}
              key='Menu'
              title='Index'
          />
          <Scene 
              component={BeerList}
              key='beerList'
              title='Beer List'
          />
          <Scene 
              component={BeerEvents}
              key='beerEvents'
              title='Beer Events'
          />
          <Scene 
              component={LoyaltyProgram}
              key='loyaltyProgram'
              title='Loyalty Program'
              rightTitle='OPEN'
              onRight={() => this.handlePress()}
          />
          <Scene 
              component={App}
              key='about'
              title='About 12welve Eyes'
          />
          <Scene 
              component={LoginSignup}
              key='loginSignup'
              title='Login / Signup'
          />
          <Scene 
            key='main'
            component={App}
          />
        </RouterWithRedux>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('side_menu', () => SideMenu);
