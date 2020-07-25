import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';

const Resultado = props => {
  let numJogadoresPorTime = props.navigator.getParam('numJogadores');
  let jogadores = props.navigator.getParam('jogadores');
  let qtdTimes = Math.ceil(
    parseFloat(jogadores.length) / parseFloat(numJogadoresPorTime),
  );
  let times = [],
    min = 0,
    max = numJogadoresPorTime;

  jogadores = _.shuffle(jogadores);

  for (let i = 0; i < qtdTimes; i++) {
    times[i] = jogadores.slice(min, max);
    min += numJogadoresPorTime;
    max += numJogadoresPorTime;
    console.log(max);
  }
  const renderTimes = () => {
    let equipes = [];
    for (let i = 0; i < qtdTimes; i++) {
      let timeDividido = times[i];
      let nomeTime = `Time ${i + 1}`;
      equipes.push(
        <TouchableOpacity
          onPress={() =>
            props.navigator.navigate('Time', {timeDividido, nomeTime})
          }>
          <View style={styles.containerTimes}>
            <Text style={styles.textTimes}>TIME {i + 1}</Text>
          </View>
        </TouchableOpacity>,
      );
    }
    return equipes;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.containerTopo}>
          <View style={styles.containerVoltar}>
            <TouchableOpacity
              onPress={() => props.navigator.navigate('HomeSorteioNome')}>
              <Icon name="arrow-left" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.containerTitulo}>
            <Text style={styles.title}>
              Total de {qtdTimes} {qtdTimes === 1 ? 'time' : 'times'}
            </Text>
          </View>
        </View>
        <View>{renderTimes()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    fontSize: 22,
  },
  containerTopo: {
    flexDirection: 'row',
  },
  textVoltar: {
    color: 'white',
  },
  containerTitulo: {
    flex: 5,
    marginBottom: 20,
  },
  containerVoltar: {
    flex: 1,
  },
  nomeList: {
    color: 'white',
    fontSize: 20,
  },
  textTimes: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
  },
  containerTimes: {
    backgroundColor: 'rgba(255,255,255,0.40)',
    marginVertical: 8,
    padding: 8,
    borderRightWidth: 5,
    borderRadius: 20,
  },
});

export default Resultado;
