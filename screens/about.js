import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function About() {
  return (
    <ScrollView style={styles.container}>
      <Text>Pozitivity is the app being created by Neil Sabde, which is intended to help overcoming sadness and bring posititivity and happiness in one's life. But how can an app bring this?</Text>
      <Text></Text>
      <Text>1. This app's positivity screen makes the person list a few things for which they are grateful for in their life and can earn smiley points to feel better and happier. This helps the user know that he/she has many things to be happy and grateful for.</Text>
      <Text></Text>
      <Text>2. The second screen, which is the health screen, tells the user about being fit and healthy. Thus this app helps improving not only mental strength but also physical strength.</Text>
      <Text></Text>
      <Text>3. The third screen generates two random inspirational quotes everytime the screen is open. This screen helps the user to get some motivation.</Text>
      <Text></Text>
      <Text>4. The fourth screen "Best About You" allows the user to input anything he/she feels being unique about. This screen helps the user to know they are good in something and thus encourages them to inculcate positivity.</Text>
      <Text></Text>
      <Text style={styles.last}>"Stay Happy. Stay Pozitive!"</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  last: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingHorizontal: 80,
    color: '#ee6f57'
  }
});