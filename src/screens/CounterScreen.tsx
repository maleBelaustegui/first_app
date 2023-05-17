import {useState} from 'react';
import {Button, Text, View} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          top: -15,
        }}>
        Counter : {counter}
      </Text>

      <Button
        title="Count"
        onPress={() => setCounter(counter + 1)}
        color="#841584"
      />
    </View>
  );
};
