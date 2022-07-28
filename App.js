import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
          <Text style={styles.titulo}>Previsão do Tempo</Text>
      </View>
      <View>
          <Text style={styles.label}>Cidade:</Text>
          <TextInput
            placeholder='Digite aqui sua cidade'
            style={styles.input}
          />
      </View>
      <View>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo:{
    marginTop:30,
    fontSize:30,
    textAlign:'center'
  },
  label:{
    fontSize: 20,
  },
  bloco:{
    marginLeft:'28%'
  },
  input:{
    borderBottomWidth:2,
    width:'80%',
    fontSize:20
  },
  botao:{
    width:'80%',
    backgroundColor:'#000',
    alignItems:'center'
  },
  textoBotao:{
    fontSize:20,
    color:'#FFF'
  }
});
