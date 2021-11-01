import React from 'react';
import styled from 'styled-components/native';

const Header = styled.View `
  flex-direction: row;
  background-color: #DDD;
  height: 200px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
`;

// criando um componente  de texto
const Quadrado = styled.View`
   background-color: ${props => props.cor};
   /*border-radius: 50;*/
   width: 50px;
   height: 50px;
`;

// criando um componente  de texto
const Quadrado2 = styled.View`
   background-color: ${props => props.cor};
   /*border-radius: 50;*/
   width: 100px;
   height: 50px;
`

// criando um componete view
const Pagina = styled.View`
  flex:1;
`;


//usando o componente criado
function App() {
  return (
    <Pagina>
      <Header>
        <Quadrado cor="black"></Quadrado>
        <Quadrado cor="red"></Quadrado>
        <Quadrado2 cor="blue"></Quadrado2>
        <Quadrado cor="#FFFF00"></Quadrado>
        <Quadrado2 cor="green"></Quadrado2>
        <Quadrado cor="#FF00"></Quadrado>
        <Quadrado2 cor="#FFD055"></Quadrado2>
        <Quadrado cor="#F0056B"></Quadrado>
        <Quadrado2 cor="#FC5F00"></Quadrado2>
        <Quadrado cor="#00FB"></Quadrado>
        <Quadrado2 cor="#66F"></Quadrado2>
        <Quadrado cor="#74ebab"></Quadrado>
        <Quadrado2 cor="#117c00"></Quadrado2>
        <Quadrado cor="#bb2aad"></Quadrado>
        <Quadrado2 cor="#ffd56d"></Quadrado2>
        <Quadrado cor="#FFFF00"></Quadrado>
        <Quadrado2 cor="green"></Quadrado2>
        <Quadrado cor="#FF00"></Quadrado>
        <Quadrado2 cor="#FF00"></Quadrado2>
        <Quadrado cor="#FFD055"></Quadrado>
        <Quadrado2 cor="#F0056B"></Quadrado2>
        <Quadrado cor="#FC5F00"></Quadrado>
        <Quadrado2 cor="#FFFF00"></Quadrado2>
        <Quadrado cor="green"></Quadrado>
        <Quadrado2 cor="#FF00"></Quadrado2>
        <Quadrado cor="#FFD055"></Quadrado>
      </Header>
    </Pagina>
  );
}

export default App;