import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../components/header';

const AboutStack = createStackNavigator({
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='About Pozitivity' />
      }
    }
  }
}, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#30475e' },
    headerTitleStyle: { color: '#ee6f57' },
    headerTintColor: '#222831'
  }
});

export default AboutStack;