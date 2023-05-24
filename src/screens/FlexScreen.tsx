import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box 1 - Flex 3</Text>
      <Text style={styles.box2}>Box 2 - Flex 2</Text>

      <View style={styles.containerRow}>
        <Text style={styles.row1}>Row 1</Text>
        <Text style={styles.row2}>Row 2</Text>
        <Text style={styles.row3}>Row 3</Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row'
  },
  box1: {
    flex: 3,
    backgroundColor: '#2A2F4F',
    fontSize: 25,
    color: '#FDE2F3',
    textAlign: 'center'
  },
  box2: {
    flex: 2,
    backgroundColor: '#917FB3',
    fontSize: 25,
    color: '#FDE2F3',
    textAlign: 'center'
  },
  row1: {
    flex: 2,
    backgroundColor: '#FFDCB6',
    fontSize: 20,
    color: '#537188',
    textAlign: 'center'
  },
  row2: {
    flex: 0.8,
    backgroundColor: '#ECC9EE',
    fontSize: 20,
    color: '#537188',
    textAlign: 'center'
  },
  row3: {
    flex: 2,
    backgroundColor: '#C9A7EB',
    fontSize: 20,
    color: '#537188',
    textAlign: 'center'
  },
});
