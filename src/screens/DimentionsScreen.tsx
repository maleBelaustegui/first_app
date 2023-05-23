import React from 'react';
import {Dimensions, StyleSheet, Text, View, useWindowDimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const DimentionsScreen = () => {


  const {width, height} =  useWindowDimensions();
  
  return (
    <View>

      <View style={styles.container}>
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>

      <Text style={styles.title}>
        W: {width} H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'black',
  },
  box1: {
    width: '50%',
    height: '40%',
    backgroundColor: 'white',
    fontSize: 30,
  },
  box2: {
    width: '50%',
    height: '40%',
    backgroundColor: 'green',
    fontSize: 30,
  },
  title:{
    fontSize: 30,
    padding: 20,
    textAlign: 'center'
  }
});
