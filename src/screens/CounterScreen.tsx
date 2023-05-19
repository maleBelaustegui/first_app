import {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';


export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter : {counter}</Text>

      <TouchableOpacity
        style={styles.fabLocationBR}
        onPress={() => setCounter(counter + 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabTxt}>+1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fabLocationBL}
        onPress={() => setCounter(counter - 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabTxt}>-1</Text>
        </View>
      </TouchableOpacity>
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
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    right: '25',
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: '25',
  },
  fab: {
    backgroundColor: 'grey',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabTxt: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignContent: 'center',
  },
});
