import React from 'react';
import { StyleSheet,Text, View} from 'react-native';

function App() {
  return (
    <View style={estilo.pagina}>
      <Text style={estilo.texto}>Olá Mundo</Text>
      <Text style={estilo.texto}>Segundo Olá Mundo</Text>
      <Text style={[estilo.texto, {fontSize:10}]}>Terceiro Olá Mundo</Text>
    </View>
  );
}

// criando a constante estilo que vai receber um objeto StyleSheet
// objeto pagina - contem todos os estilos usados
const estilo = StyleSheet.create({
  pagina: {
    width: 200,
    height: 200,
    backgroundColor: '#FF0000'
  },

  texto: {
    color: '#FFF',
    fontSize: 25
  }
});

export default App;