import { StyleSheet, View,Text,FlatList,StatusBar} from 'react-native';
import{useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import Botaoflutuante  from '../componentes/Botaoflutuante';
import Cb from '../componentes/Cb';
import { criartabela,recuperandoDespesas } from '../Services/Despesasdb';
import React from 'react';
function MyStack() {
  const [extrato,setExtrato] = useState([])
  const navigation = useNavigation();
    useEffect (()=>{
      criartabela()
    },[])
  
  async function verTabela(){
    useEffect (()=>{
      recuperandoDespesas().then((dados)=>{
        setExtrato(dados)
      });
     
    },[])
    
  }
 verTabela()
 const Item = ({item}) => (
  <View style={aviso.item}>
    <Text>{item.Data}</Text>
    <Text>{item.Valor}</Text>
    <Text>{item.Descricao}</Text>
    <Text>{item.parcelas}</Text>
  </View>
);

  return (
    <View>
      <Cb title="Despesas"/>
      <View style={aviso.container}>
      <FlatList
        data={extrato}
        renderItem={Item}
        keyExtractor={item => item.id}
      />

      </View>
      <Botaoflutuante
      onPress={() => navigation.navigate('Cadastrodespesas')}
      />
    </View>
  );
}
const aviso = StyleSheet.create({
    av:{
      left:60,
      top:200,
      fontSize:20
    },
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#FFF',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    container: {
     
    },
    
})
export default MyStack;