import React from 'react';
import styled from 'styled-components/native';

// criando um componente  de texto
const Quadrado = styled.View`
   background-color: ${props => props.cor};
   width: 50px;
   height: 50px;
   border-radius: 30px;
`;

// criando um componete view
const Pagina = styled.View`
  flex:1;
  flex-direction: row;
  justify-content: center; /* alinha de forma horizontal */
  align-items: center; /* alinha de forma vertical */
`;

//usando o componente criado
function App() {
  return (
    <Pagina>
      <Quadrado cor="black"></Quadrado>
      <Quadrado cor="red"></Quadrado>
      <Quadrado cor="blue"></Quadrado>
    </Pagina>
  );
}

export default App;