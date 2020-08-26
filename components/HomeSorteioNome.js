/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Slider,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Alert,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Item from './AdapterFlatList';

const Home = props => {
  let [numJogadores, setNumJogadores] = React.useState(5);
  let [jogadores, setJogadores] = React.useState([]);
  let [jogador, setJogador] = React.useState('');

  function addJogador() {
    if (jogador.length < 1) {
      Alert.alert('O nome não pode ser vazio.');
    } else {
      setJogadores([...jogadores, jogador]);
      setJogador('');
    }
  }

  function removeJogador(value) {
    Alert.alert('Atenção', 'Deseja realmente excluir esse(a) jogador(a)?', [
      {text: 'Não', style: 'cancel'},
      {
        text: 'Sim',
        onPress: () =>
          setJogadores(jogadores.filter(player => player.id !== value)),
      },
    ]);
  }

  function resultado() {
    console.log(numJogadores);
    if (numJogadores > jogadores.length) {
      Alert.alert(
        'Ops',
        'O número de jogadores deve ser igual ou maior ao número de times.',
      );
    } else {
      props.navigator.navigate('Resultado', {jogadores, numJogadores});
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => props.navigator.navigate('Home')}
            style={styles.buttonVoltar}>
            <Icon name="arrow-left" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setJogadores([]);
            }}
            style={styles.buttonRefresh}>
            <Icon name="refresh" size={30} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.textLegendQtd}>Quantos jogadores por time?</Text>
        <View style={styles.containerSlider}>
          <Slider
            step={1}
            minimumValue={1}
            maximumValue={40}
            onValueChange={value => setNumJogadores(value)}
            value={numJogadores}
            minimumTrackTintColor="#FFCC80"
            thumbTintColor="#FFCC80"
          />
        </View>
        <Text style={styles.textLegendValue}>{numJogadores}</Text>
      </View>
      <Text style={styles.textLegendNome}>Insira o nome do jogador:</Text>
      <View style={styles.containerNome}>
        <View style={styles.containerJogador}>
          <TextInput
            style={styles.inputJogadores}
            onChangeText={text =>
              setJogador({id: Date.now().toString(), nome: text})
            }
            value={jogador.nome}
          />
        </View>
        <View style={styles.containerButtonAdd}>
          <TouchableOpacity onPress={addJogador}>
            <Icon name="plus" size={25} color="#121212" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={jogadores}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Item item={{item, index}} removeJogador={removeJogador} />
        )}
      />
      <View>
        <TouchableOpacity style={styles.button} onPress={() => resultado()}>
          <Text style={styles.textButton}>SORTEAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 8,
  },
  header: {
    flexDirection: 'row',
  },
  buttonVoltar: {
    flex: 1,
  },
  buttonRefresh: {
    alignSelf: 'flex-end',
  },
  text: {
    color: 'rgba(255,255,255,0.87)',
    fontSize: 24,
  },
  textTitle: {
    fontSize: 30,
    color: '#FFCC80',
    alignSelf: 'center',
    marginTop: 16,
  },
  textLegendQtd: {
    fontSize: 24,
    color: 'rgba(255,255,255,0.87)',
    alignSelf: 'flex-start',
    marginTop: 16,
    marginLeft: 20,
  },
  textLegendNome: {
    fontSize: 24,
    color: 'rgba(255,255,255,0.87)',
    alignSelf: 'flex-start',
    marginTop: 25,
    marginLeft: 20,
  },
  textLegendValue: {
    fontSize: 48,
    color: 'rgba(255,255,255,0.87)',
    alignSelf: 'center',
    marginTop: 5,
    marginLeft: 20,
  },
  inputJogadores: {
    height: 50,
    borderColor: '#FFCC80',
    borderWidth: 2,
    margin: 16,
    color: 'rgba(255,255,255,0.87)',
    borderRadius: 20,
    fontSize: 20,
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFCC80',
    justifyContent: 'center',
    borderRadius: 16,
  },
  textButton: {
    color: '#121212',
    alignSelf: 'center',
    margin: 8,
  },
  containerNome: {
    flexDirection: 'row',
  },
  containerJogador: {
    flex: 6,
  },
  containerButtonAdd: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCC80',
    margin: 15,
    borderRadius: 30,
  },
  containerLista: {
    height: null,
  },
  containerSlider: {
    margin: 20,
  },
});

export default Home;
