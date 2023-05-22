import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  position?: 'br' | 'bl';
}

export const Fab = ({title, onPress, position}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={position === 'br' ? styles.fabLocationBR : styles.fabLocationBL}
        onPress={onPress}>
        <View style={styles.fab}>
          <Text style={styles.fabTxt}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const android = () => {
    return (
      <View
        style={position === 'br' ? styles.fabLocationBR : styles.fabLocationBL}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('white', true, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabTxt}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };
  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fab: {
    backgroundColor: 'grey',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  fabTxt: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
