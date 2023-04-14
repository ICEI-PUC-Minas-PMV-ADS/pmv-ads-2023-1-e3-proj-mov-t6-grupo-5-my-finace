import { StyleSheet, View,Text,FlatList,StatusBar, TouchableOpacity} from 'react-native';
import{List} from 'react-native-paper';
import{useEffect, useState} from 'react';
import { useNavigation,useIsFocused } from '@react-navigation/native';
import Botaoflutuante  from '../componentes/Botaoflutuante';
import Cb from '../componentes/Cb';
import { CreateTable,recuperandoRendas } from '../Services/RendasDb';
import React from 'react';
function StackRendas() {
  const [extratoRendas,setExtratoRendas] = useState([])
  const IsFocused = useIsFocused();
  const navigation = useNavigation();
  const[selecionada,setSeleciona]= useState({})
  useEffect (()=>{
    CreateTable()
  },[])
  
  async function verTable(){
    useEffect (()=>{
      recuperandoRendas().then((dados)=>{
        setExtratoRendas(dados)
      }); 
    },[IsFocused])
    
  }
  const Item = ({item}) => (
    <TouchableOpacity style={lista.item} onPress={() => navigation.navigate('EditarRendas',{id:item.id})}>
    <Text>{item.Dia}</Text>
    <Text>{'R$ '+item.Quantia}</Text>
    <Text>{item.Desc}</Text>
    <Text>{item.Credito}</Text>
    <List.Icon
          style={lista.iconePosicao}
          icon={item.Destinacao}
          
          />
  </TouchableOpacity>
);

verTable()
return (
    <View>
      <Cb title="Rendas"/>
      <View style={lista.container}>
      <FlatList
        data={extratoRendas}
        renderItem={Item}
        keyExtractor={item => item.id}
      />
      </View>
      <Botaoflutuante
      onPress={() => navigation.navigate('RegistroDeRendas')}
      />
    </View>
  );
}
const lista = StyleSheet.create({
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
export default StackRendas;