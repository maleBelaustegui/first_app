import React from 'react';
import {Text, View} from 'react-native';

export const HolaScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 55,
          textAlign: 'center',
        }}>
        hola
      </Text>
    </View>
  );
};
