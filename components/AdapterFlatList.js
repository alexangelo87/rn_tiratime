import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Item = ({title}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.titulo}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'rgba(192,192,192,0.6)',
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 30,
  },
  titulo: {
    fontSize: 25,
    color: 'black',
    alignSelf: 'center',
  },
});

export default Item;
