import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import Positive from '../screens/positive';
import Health from '../screens/health';
import Quotes from '../screens/quotes';
import Unique from '../screens/unique';
import Great from '../screens/great';
import Header from '../components/header';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Home' />
      }
    }
  },
  Positive: Positive,
  Health: Health,
  Quotes: Quotes,
  Unique: {
    screen: Unique,
    navigationOptions: {
      title: 'Best of You'
    }
  },
  Great: {
    screen: Great,
    navigationOptions: {
      headerShown: false
    }
  }
}, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: '#30475e' },
    headerTitleStyle: { color: '#ee6f57' },
    headerTintColor: '#222831'
  }
});

export default HomeStack;