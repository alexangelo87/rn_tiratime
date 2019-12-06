import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Item = ({title}) => {
  return (
    <View style={styles.item}>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>{title}</Text>
      </View>
      <View style={styles.containerIcone}>
        <TouchableOpacity>
          <Icon name="minus" size={30} color="red" />
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
