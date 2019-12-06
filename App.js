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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Item from './components/AdapterFlatList';

const App = () => {
  let [numJogadores, setNumJogadores] = React.useState(0);
  let [jogadores, setJogadores] = React.useState([]);
  let [jogador, setJogador] = React.useState('');

  function addJogador() {
    setJogadores([...jogadores, jogador]);
    setJogador('');
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textTitle}>TIRA TIME</Text>
      </View>
      <View>
        <Text style={styles.textLegendQtd}>Quantos jogadores por time?</Text>
        <View style={styles.containerSlider}>
          <Slider
            step={1}
            maximumValue={40}
            onValueChange={value => setNumJogadores(value)}
            value={numJogadores}
            minimumTrackTintColor="orange"
            thumbTintColor="orange"
          />
        </View>
        <Text style={styles.textLegendValue}>{numJogadores}</Text>
        {/* <TextInput style={styles.inputJogadores} keyboardType="number-pad" /> */}
      </View>
      <Text style={styles.textLegendNome}>Insira o nome do jogador:</Text>
      <View style={styles.containerNome}>
        <View style={styles.containerJogador}>
          <TextInput
            style={styles.inputJogadores}
            onChangeText={text => setJogador(text)}
            value={jogador}
          />
        </View>
        <View style={styles.containerButtonAdd}>
          <TouchableOpacity>
            <Icon name="plus" size={30} color="#000" onPress={addJogador} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={jogadores}
        renderItem={({item}) => <Item title={item} />}
      />
      <View>
        <Button title="Sortear" style={styles.button} color="orange" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
  textTitle: {
    fontSize: 30,
    color: 'orange',
    alignSelf: 'center',
    marginTop: 16,
  },
  textLegendQtd: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'flex-start',
    marginTop: 16,
    marginLeft: 20,
  },
  textLegendNome: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'flex-start',
    marginTop: 25,
    marginLeft: 20,
  },
  textLegendValue: {
    fontSize: 35,
    color: 'white',
    alignSelf: 'center',
    marginTop: 16,
    marginLeft: 20,
  },
  inputJogadores: {
    height: 50,
    borderColor: 'orange',
    borderWidth: 3,
    margin: 16,
    color: 'white',
    borderRadius: 20,
    fontSize: 20,
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  button: {
    color: 'black',
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
    backgroundColor: 'orange',
    margin: 15,
  },
  containerLista: {
    height: null,
  },
  containerSlider: {
    margin: 20,
  },
});

export default App;
