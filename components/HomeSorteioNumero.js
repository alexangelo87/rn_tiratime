import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeSorteioNumero(props) {
  const [valorMinimo, setValorMinimo] = useState('1');
  const [valorMaximo, setValorMaximo] = useState('10');
  const [valorSorteado, setValorSorteado] = useState('0');
  const [valoresSorteados, setValoresSorteados] = useState([]);

  function sorteio() {
    setValorSorteado(
      Math.floor(
        Math.random() * (parseInt(valorMaximo) - (parseInt(valorMinimo) - 1)),
      ) + parseInt(valorMinimo),
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigator.navigate('Home')}>
        <Icon name="arrow-left" size={30} color="#fff" />
      </TouchableOpacity>
      <View style={styles.containerMinMax}>
        <TextInput
          value={valorMinimo}
          style={styles.inputValorMinimoMaximo}
          onChangeText={value => setValorMinimo(value)}
          keyboardType="numeric"
        />
        <View style={styles.viewTextAte}>
          <Text style={styles.textAte}>até</Text>
        </View>
        <TextInput
          value={valorMaximo}
          style={styles.inputValorMinimoMaximo}
          onChangeText={value => setValorMaximo(value)}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity style={styles.btnSortear} onPress={() => sorteio()}>
        <Text style={styles.textSortear}>SORTEAR</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>{valorSorteado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  containerMinMax: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputValorMinimoMaximo: {
    borderWidth: 1,
    borderColor: 'orange',
    color: 'white',
    flex: 1,
    borderRadius: 25,
    margin: 20,
    fontSize: 24,
    textAlign: 'center',
  },
  textAte: {
    color: 'rgba(255,255,255,0.87)',
  },
  viewTextAte: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSortear: {
    backgroundColor: 'orange',
    borderRadius: 80,
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 16,
  },
  textSortear: {
    color: 'rgba(255,255,255,0.87)',
    fontSize: 24,
  },
  resultado: {
    color: 'rgba(255,255,255,0.87)',
    fontSize: 56,
    alignSelf: 'center',
  },
});

export default HomeSorteioNumero;
