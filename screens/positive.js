import React from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../components/Input';


export default class PositiveScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Input showSmiles='true' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
