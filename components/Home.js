import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Home(props) {
  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <View style={styles.containerNome}>
          <TouchableOpacity
            onPress={() => props.navigator.navigate('HomeSorteioNome')}>
            <Icon name="quora" size={70} color="#ffb74d" style={styles.icon} />
            <Text style={styles.textButton}>Sorteio por nomes</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerNumero}>
          <TouchableOpacity
            onPress={() => props.navigator.navigate('HomeSorteioNumero')}>
            <Icon
              name="hashtag"
              size={70}
              color="#ffb74d"
              style={styles.icon}
            />
            <Text style={styles.textButton}>Sorteio por números</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  containerNome: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    flex: 1,
    margin: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerNumero: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    flex: 1,
    margin: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
  textButton: {
    color: 'rgba(255,255,255,0.86)',
    fontSize: 24,
    margin: 16,
  },
});

export default Home;
