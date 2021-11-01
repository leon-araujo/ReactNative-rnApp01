import React from 'react';
import styled from 'styled-components/native';

// criando um componente  de texto
const Quadrado = styled.View`
   background-color: ${props => props.cor};
   flex:${props => props.flexivel};
   height: 50px;
`;


// criando um componete view
const Pagina = styled.View`
  flex:1;
  flex-direction: column;
  margin-top: 25px;
`;

//usando o componente criado
function App() {
  return (
    <Pagina>
      <Quadrado flexivel={1} cor="black"></Quadrado>
      <Quadrado flexivel={2} cor="red"></Quadrado>
      <Quadrado flexivel={1} cor="blue"></Quadrado>
    </Pagina>
  );
}

export default App;