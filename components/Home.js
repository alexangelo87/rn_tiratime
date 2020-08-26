import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function Home(props) {
  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <View style={styles.logo}>
          <Image
            resizeMode="center"
            source={require('../assets/logo3.png')}
            style={styles.image}
          />
        </View>
        <TouchableOpacity
          onPress={() => props.navigator.navigate('HomeSorteioNome')}
          style={styles.btn}>
          {/* <Icon name="quora" size={70} color="#ffb74d" style={styles.icon} /> */}
          <Text style={styles.textButton}>SORTEIO POR NOMES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigator.navigate('HomeSorteioNumero')}
          style={styles.btn}>
          <Text style={styles.textButton}>SORTEIO POR NÚMEROS</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
let {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  btn: {
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    margin: 8,
    borderRadius: 25,
  },
  icon: {
    alignSelf: 'center',
  },
  textButton: {
    color: 'rgba(255,255,255,0.86)',
    fontSize: 16,
    margin: 16,
    textAlign: 'center',
  },
  logo: {
    marginBottom: 50,
  },
  image: {
    width: '80%',
    height: 80,
    alignSelf: 'center',
  },
});

export default Home;
