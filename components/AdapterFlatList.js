import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Item = props => {
  console.log(props);
  return (
    <View style={styles.item}>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>
          {props.item.index + 1} - {props.item.item.nome}
        </Text>
      </View>
      <View style={styles.containerIcone}>
        <TouchableOpacity
          onPress={() => props.removeJogador(props.item.item.id)}>
          <Icon name="remove" size={30} color="#f06292" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'rgba(255,255,255,0.40)',
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
    color: 'rgba(255,255,255,0.87)',
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
