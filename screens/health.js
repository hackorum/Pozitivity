//Sources google.com

import React from 'react';
import { ScrollView, Text, Image, StyleSheet } from 'react-native';

export default class Health extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.textStyle}>
          How to stay fit in the lockdown at home?
        </Text>
        <Text style={styles.h2}>Here are a few steps you should consider:</Text>
        <Text style={styles.h3}>1. Follow a fixed routine for exercises</Text>
        <Image
          style={styles.image1}
          source={require('../assets/routineicon.png')}
        />
        <Text style={styles.h3}>
          2. Set goals to accomplish in your workout
        </Text>
        <Image
          style={styles.image1}
          source={require('../assets/goalsicon.png')}
        />
        <Text style={styles.h3}>
          3. If you are working from home get up every 30 minutes and just walk
          around your home for  at least 2 to 3 minutes.
        </Text>
        <Image
          style={styles.image1}
          source={require('../assets/walkicon.png')}
        />
        <Text style={styles.h3}>4. Say no to unhealthy food</Text>
        <Image
          style={styles.image2}
          source={require('../assets/foodicon.png')}
        />
        <Text style={styles.textStyle}>Exercises at home:</Text>
        <Text style={{ marginBottom: 10 }}>
          1. Yoga poses in the morning: Surya Namaskar, Utkatasana, Parivrtta
          Utkatasana, Adho Mukha Svanasana, Anjaneyasana, Trikonasana,
          Virabhadrasana and Natarajasana
        </Text>
        <Text>
          2. Workout in the evening: Single-leg bridge, Squat, Pushup, Walking
          lunge, Pike pushups, Get-up squat and Plank with alternating leg lift.
        </Text>
        <Text style={styles.textStyle}>A Good Health Plan:</Text>
        <Text>
          Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat
          dairy products. Controls portion sizes.
        </Text>
        <Text>Includes lean meats, poultry, fish, beans, eggs, and nuts.</Text>
        <Text style={{ marginBottom: 50 }}>Limits saturated and trans fats, sodium, and added sugars.</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    paddingTop: 20,
    paddingLeft: 5,
    paddingBottom: 6,
    borderBottomWidth: 1.7,
    fontSize: 17,
    color: '#30475e',
    borderBottomColor: 'coral',
  },
  h2: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 11,
    fontWeight: '500',
  },
  h3: {
    marginBottom: 8,
  },
  image1: {
    width: 50,
    height: 50,
    marginLeft: 100,
  },
  image2: {
    width: 50,
    height: 50,
    marginLeft: 100,
    marginBottom: 20,
  },
});
