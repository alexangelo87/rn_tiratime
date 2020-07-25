import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Item = props => {
  return (
    <View style={styles.item}>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>{props.item.nome}</Text>
      </View>
    </View>
  );
};

const Time = props => {
  let time = props.navigator.getParam('timeDividido');
  let nomeTime = props.navigator.getParam('nomeTime');
  console.log(nomeTime);
  return (
    <View style={styles.container}>
      <View style={styles.containerVoltar}>
        <TouchableOpacity onPress={() => props.navigator.navigate('Resultado')}>
          <Icon name="arrow-left" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.containerTime}>
        <Text style={styles.nomeTime}>{nomeTime}</Text>
      </View>
      <FlatList
        data={time}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Item item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  nomeTime: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
  },
  containerTime: {
    marginBottom: 20,
  },
  item: {
    backgroundColor: 'rgba(192,192,192,0.4)',
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 10,
    borderRadius: 30,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titulo: {
    fontSize: 25,
    color: 'rgba(255,255,255,0.87)',
    alignSelf: 'center',
  },
});

export default Time;
