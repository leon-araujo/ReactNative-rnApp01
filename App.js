import React from 'react';
import styled from 'styled-components/native';
import {Image} from 'react-native';

const Header = styled.View `
  flex-direction: row;
  background-color: #DDD;
  height: 500px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
`;

// criando um componente  de texto
const Quadrado = styled.View`
   background-color: ${props => props.cor};
   /*border-radius: 50;*/
   width: 150px;
   height: 150px;
   justify-content: center;
   align-items: center;
`;

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
        <Quadrado cor="red">
          <Image source={require('./src/imagens/city-girl-horizon.jpg')}
          style={{width: 100, height: 100, backgroundColor: '#AAA'}}
          resizeMode='cover'
          />
        </Quadrado>
        <Quadrado cor="blue">
        <Image source={{uri:'https://p4.wallpaperbetter.com/wallpaper/790/734/537/nature-coast-clouds-anime-girls-wallpaper-preview.jpg'}}
          style={{width: 100, height: 100, backgroundColor: '#AAA'}}
          resizeMode='center'
        />
        </Quadrado>
      </Header>
    </Pagina>
  );
}

export default App;