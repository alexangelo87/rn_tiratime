import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Item = props => {
  return (
    <View style={styles.item}>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>{props.item.nome}</Text>
      </View>
      <View style={styles.containerIcone}>
        <TouchableOpacity onPress={() => props.removeJogador(props.item.id)}>
          <Icon name="minus" size={30} color="#ff0067" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'rgba(192,192,192,0.6)',
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 10,
    borderRadius: 30,
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  titulo: {
    fontSize: 25,
    color: 'black',
    alignSelf: 'center',
  },
  containerIcone: {
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
  },
  containerTitulo: {
    flex: 6,
  },
});

export default Item;
