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
   //verTabela()
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
    <List.Icon style={aviso.iconePosicao} icon={item.Categoria}/>
    <View style={aviso.lista}>
      <Text>{item.Data}</Text>
      <Text>{'Valor: R$ '+item.Valor}</Text>
      <Text>{'Nº parcelas: '+item.Parcela}</Text>
      <Text>{'Descricão: '+item.Descricao}</Text>
    </View>
    <List.Icon style={aviso.verMais}icon={'chevron-right'} color={'green'}/>
  </TouchableOpacity>
);

verTabela()
return (
    <View>
      <CbSemVolta title="Despesas"/>
      <View>
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
      right:130,
      top:50,
    },
    item: {
      backgroundColor: '#fff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderLeftWidth: 1,
      borderColor:"green"
    },
    title: {
      fontSize: 32,
    },
    container: {
     backgroundColor:'#c5e5b4'
    },
    verMais:{
      left:150,
      bottom:60,
      fontSize:350
    },
    lista:{
      left:70
    }
})
export default MyStack;