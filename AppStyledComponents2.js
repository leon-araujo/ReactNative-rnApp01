import React from 'react';
import styled from 'styled-components/native';

// criando um componente  de texto
const Texto = styled.Text`
    color: ${props => props.cor}; /* recebe o que esta dentro de cor */
    font-size: 30px;
    background-color: green;
`;


// criando um componete view
const Pagina = styled.View`
  flex:1;
  background-color: #0000FF;
`;

//usando o componente criado
function App() {
  return (
    <Pagina>
      <Texto cor="red">Texto de exemplo</Texto>
      <Texto cor="black">Outro texto</Texto>
    </Pagina>
  );
}

export default App;