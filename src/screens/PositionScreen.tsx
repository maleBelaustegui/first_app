import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={ styles.title}> Positions </Text>
     
      <View style={styles.cajaRosa} />
      <View style={styles.cajaVerde} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#217074',
  },
  title:{
    top: -200,
    fontSize: 35,
    color: '#E7EAEF'


  },
  cajaRosa: {
    width: 100,
    height: 100,
    bottom: 0,
    backgroundColor: '#37745B',
    borderColor: '#EDC5AB',
    borderBottomWidth: 10
  },
  cajaVerde: {
    width: 100,
    height: 100,
    bottom: -20,
    backgroundColor: '#8B9D77',
    borderColor: '#EDC5AB',
    borderBottomWidth:10
  },
});
