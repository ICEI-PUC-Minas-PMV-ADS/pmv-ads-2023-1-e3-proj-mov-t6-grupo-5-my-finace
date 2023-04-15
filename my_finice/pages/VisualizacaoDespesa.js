import { StyleSheet, View,Text,FlatList,StatusBar, TouchableOpacity} from 'react-native';
import{List} from 'react-native-paper';
import{useEffect, useState} from 'react';
import { useNavigation,useIsFocused } from '@react-navigation/native';
import Botaoflutuante  from '../componentes/Botaoflutuante';
import Cb from '../componentes/Cb';
import CbSemVolta from '../componentes/CbSemVolta'
import { criartabela,recuperandoDespesas } from '../Services/Despesasdb';
import React from 'react';
function MyStack() {
  const [extrato,setExtrato] = useState([])
  const IsFocused = useIsFocused();
  const navigation = useNavigation();
  useEffect (()=>{
    criartabela()
  },[])
  
  async function verTabela(){
    useEffect (()=>{
      recuperandoDespesas().then((dados)=>{
        setExtrato(dados)
      }); 
    },[IsFocused])
    
  }
  const Item = ({item}) => (
    <TouchableOpacity style={aviso.item} onPress={() => navigation.navigate('EditarDespesas',{id:item.id})}>
    <Text>{item.Data}</Text>
    <Text>{'Valor: R$ '+item.Valor}</Text>
    <Text>{'Descricão: '+item.Descricao}</Text>
    <Text>{'Nº parcelas: '+item.Parcela}</Text>
    <List.Icon
          style={aviso.iconePosicao}
          icon={item.Categoria}
          
          />
  </TouchableOpacity>
);

verTabela()
return (
    <View>
      <CbSemVolta title="Despesas"/>
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
      marginTop: StatusBar.currentHeight || 0
    },
    iconePosicao:{
      left:100,
      bottom:50,
      fontSize:100
      
    },
    item: {
      backgroundColor: '#fff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderWidth: 1,
      borderColor:"green"
    },
    title: {
      fontSize: 32,
    },
    container: {
     
    },
    
})
export default MyStack;