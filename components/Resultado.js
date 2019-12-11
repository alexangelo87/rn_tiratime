import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import _ from 'lodash';

const Resultado = props => {
  let numJogadoresPorTime = props.navigator.getParam('numJogadores');
  let jogadores = props.navigator.getParam('jogadores');
  let qtdTimes = Math.ceil(
    parseFloat(jogadores.length) / parseFloat(numJogadoresPorTime),
  );
  let times = [],
    min = 0,
    max = numJogadoresPorTime;

  function Item({nome}) {
    return (
      <View>
        <Text style={styles.nomeList}>{nome}</Text>
      </View>
    );
  }

  const renderTimes = () => {
    let equipes = [];
    for (let i = 0; i < qtdTimes; i++) {
      equipes.push(
        <TouchableOpacity>
          <View>
            <Text style={styles.textTimes}>Time {i + 1}</Text>
          </View>
        </TouchableOpacity>,
      );
    }
    return equipes;
  };

  jogadores = _.shuffle(jogadores);

  for (let i = 0; i < qtdTimes; i++) {
    times[i] = jogadores.slice(min, max);
    min += numJogadoresPorTime;
    max += max;
  }

  console.log(times);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTopo}>
        <View style={styles.containerVoltar}>
          <TouchableOpacity onPress={() => props.navigator.navigate('Home')}>
            <Text style={styles.textVoltar}>Voltar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerTitulo}>
          <Text style={styles.title}>Total de {qtdTimes} times</Text>
        </View>
      </View>
      <View>{renderTimes()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    fontSize: 25,
  },
  containerTopo: {
    flexDirection: 'row',
  },
  textVoltar: {
    color: 'white',
  },
  containerTitulo: {
    flex: 5,
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
    fontSize: 25,
  },
});

export default Resultado;
