import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  title: {
    paddingHorizontal: 100,
    backgroundColor: 'blue',
    fontSize: 20,
    color: 'white'
  },
});
