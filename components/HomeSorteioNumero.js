import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeSorteioNumero(props) {
  const [valorMinimo, setValorMinimo] = useState('1');
  const [valorMaximo, setValorMaximo] = useState('5');
  let [valorSorteado, setValorSorteado] = useState(null);
  let [valoresSorteados, setValoresSorteados] = useState([]);
  const [valorAnimacao, setValorAnimacao] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  let [flatList, setFlatList] = useState();

  function numerosRandomicos() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * parseInt(valorMaximo)));
      }, 70);
    });
  }

  async function animacao() {
    for (let index = 0; index <= 10; index++) {
      setValorAnimacao(await numerosRandomicos());
    }
  }

  async function sorteio() {
    if (parseInt(valorMaximo) <= parseInt(valorMinimo)) {
      Alert.alert(
        'Erro',
        'Valor máximo não pode ser menor ou igual ao valor mínimo',
      );
      return;
    }
    if (
      valoresSorteados.length <=
      parseInt(valorMaximo) - parseInt(valorMinimo)
    ) {
      valorSorteado =
        Math.floor(
          Math.random() * (parseInt(valorMaximo) - (parseInt(valorMinimo) - 1)),
        ) + parseInt(valorMinimo);
      if (valoresSorteados.includes(valorSorteado)) {
        await sorteio();
      } else {
        setIsLoading(true);
        await animacao();
        if (valorSorteado !== null) {
          valoresSorteados.push(valorSorteado);
          console.log(valoresSorteados);
        }
        setValorSorteado(valorSorteado);
        setIsLoading(false);
      }
    } else {
      setValorSorteado('Fim...');
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => props.navigator.navigate('Home')}
          style={styles.buttonVoltar}>
          <Icon name="arrow-left" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setValoresSorteados([]);
            setValorSorteado(null);
          }}
          style={styles.buttonRefresh}>
          <Icon name="refresh" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.containerMinMax}>
        <TextInput
          value={valorMinimo}
          style={styles.inputValorMinimoMaximo}
          onChangeText={value => setValorMinimo(value)}
          keyboardType="numeric"
          editable={valoresSorteados.length > 0 ? false : true}
        />
        <View style={styles.viewTextAte}>
          <Text style={styles.textAte}>até</Text>
        </View>
        <TextInput
          value={valorMaximo}
          style={styles.inputValorMinimoMaximo}
          onChangeText={value => setValorMaximo(value)}
          keyboardType="numeric"
          editable={valoresSorteados.length > 0 ? false : true}
        />
      </View>
      <TouchableOpacity
        style={styles.btnSortear}
        onPress={async () => !isLoading && (await sorteio())}>
        <Text style={styles.textSortear}>SORTEAR</Text>
      </TouchableOpacity>
      {!isLoading ? (
        <Text style={styles.resultado}>{valorSorteado || 0}</Text>
      ) : (
        <Text style={styles.resultadoAnimacao}>{valorAnimacao}</Text>
      )}

      {valoresSorteados.length > 0 && (
        <View style={styles.containerNumerosSorteados}>
          <Text style={styles.titleNumerosSorteados}>Números sorteados:</Text>
          <FlatList
            horizontal
            data={valoresSorteados}
            ref={list => (flatList = list)}
            onContentSizeChange={() => {
              flatList.scrollToEnd({animated: false});
            }}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({item, index}) => (
              <View>
                <View style={styles.viewNumerosSorteados}>
                  <Text style={styles.numerosSorteados}>{item}</Text>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
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
  containerMinMax: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  inputValorMinimoMaximo: {
    borderWidth: 1,
    borderColor: '#FFCC80',
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
    backgroundColor: '#FFCC80',
    borderRadius: 80,
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 16,
  },
  textSortear: {
    color: '#121212',
    fontSize: 24,
  },
  resultado: {
    color: 'rgba(255,255,255,0.87)',
    fontSize: 56,
    alignSelf: 'center',
  },
  resultadoAnimacao: {
    color: 'rgba(255,255,255,0.87)',
    fontSize: 56,
    alignSelf: 'center',
  },
  containerNumerosSorteados: {
    marginTop: 10,
  },
  titleNumerosSorteados: {
    color: 'rgba(255,255,255,0.87)',
  },
  numerosSorteados: {
    color: 'rgba(255,255,255,0.87)',
    fontSize: 40,
    margin: 10,
  },
  viewNumerosSorteados: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 5,
    textAlign: 'center',
    margin: 5,
    borderRadius: 25,
    marginTop: 15,
  },
});

export default HomeSorteioNumero;
