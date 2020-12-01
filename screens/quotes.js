import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import quote from '../components/quotes.json';

export default class Quotes extends React.Component {
  getQuote() {
    return quote[Math.floor(Math.random() * quote.length)];
  }
  render() {
    const q = this.getQuote();
    const q2 = this.getQuote();
    return (
      <View>
        <Text style={{ fontSize: 27 }}>Random Inspirational Quotes</Text>
        <Text style={styles.textStyle}>
          {q.text} —{q.attribution}
        </Text>
        <Text style={styles.textStyle}>
          {q2.text} —{q2.attribution}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
    fontSize: 14,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    padding: 8,
    marginTop: 30
  },
});
