import {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter : {counter}</Text>

      <Fab title="+1" 
           onPress={() => setCounter(counter + 1)}
           position="bl" />

      <Fab title="-1" 
           onPress={() => setCounter(counter - 1)} 
           position="br" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001449',
    justifyContent: 'center',
    display: 'flex',
    alignContent: 'center',
  },
  title: {
    fontSize: 40,
    top: -15,
    textAlign: 'center',
    color: 'white',
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  }
});
