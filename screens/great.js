import React from 'react';
import { View, Text, Image, Button } from 'react-native';

export default class Great extends React.Component {
  render() {
    return (
      <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <Button title='Back' color='#30475e' onPress={() => this.props.navigation.navigate('Home')} />
        <Text style={{ fontSize: 25 }}>Great! Now you know why you are</Text>
        <Image
          style={{ width: 200, height: 200 }}
          source={require('../assets/unique.jpg')}
        />
      </View>
    );
  }
}
