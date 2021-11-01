import React from 'react';
import styled from 'styled-components/native';

// criando um componente  de texto
const Quadrado = styled.View`
   background-color: ${props => props.cor};
   /*border-radius: 50;*/
   width: 50px;
   height: 50px;
`;

// criando um componete view
const Pagina = styled.View`
  flex:1;
  flex-direction: column; /* alinha os componetes entre si */
  justify-content: center; /* alinha de forma horizontal */
  align-items: flex-end; /* alinha de forma vertical */
`;

//usando o componente criado
function App() {
  return (
    <Pagina>
      <Quadrado cor="black"></Quadrado>
      <Quadrado cor="red"></Quadrado>
      <Quadrado cor="blue"></Quadrado>
      <Quadrado cor="#FFFF00"></Quadrado>
    </Pagina>
  );
}

export default App;