import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box 1 - Flex 5</Text>
      <Text style={styles.box2}>Box 2 - Flex 8</Text>
      <Text style={styles.box3}>Box 3 - Flex 2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  box1: {
    flex: 5,
    backgroundColor: '#2A2F4F',
    fontSize: 25,
    color: '#FDE2F3',
  },
  box2: {
    flex: 8,
    backgroundColor: '#917FB3',
    fontSize: 25,
    color: '#FDE2F3',
  },
  box3: {
    flex: 2,
    backgroundColor: '#9384D1',
    fontSize: 25,
    color: '#FDE2F3',
  },
});
