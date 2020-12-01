import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default class Home extends React.Component {
  changeScreen(screen) {
    this.props.navigation.navigate(screen);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.changeScreen('Positive');
            }}>
            <Text style={styles.textStyle}>Positivity</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.changeScreen('Health');
            }}>
            <Text style={styles.textStyle}>Health</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.changeScreen('Quotes');
            }}>
            <Text style={styles.textStyle}>Happy Quotes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              this.changeScreen('Unique');
            }}>
            <Text style={styles.textStyle}>Best About You</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f5f5',
  },
  button: {
    backgroundColor: '#30475e',
    padding: 20,
    alignItems: 'center',
    margin: 50,
    marginBottom: -10,
    borderRadius: 20
  },
  button2: {
    backgroundColor: '#30475e',
    padding: 20,
    alignItems: 'center',
    margin: 50,
    marginBottom: 10,
    borderRadius: 20
  },
  textStyle: {
    color: '#e8e8e8',
    fontSize: 20,
  },
});
