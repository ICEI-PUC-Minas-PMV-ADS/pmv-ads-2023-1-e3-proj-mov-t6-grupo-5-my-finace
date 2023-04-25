import { StyleSheet, View,Text,FlatList,StatusBar, TouchableOpacity} from 'react-native';
import{List} from 'react-native-paper';
import{useEffect, useState} from 'react';
import { useNavigation,useIsFocused } from '@react-navigation/native';
import Botaoflutuante  from '../componentes/Botaoflutuante';
import CbSemVolta from '../componentes/CbSemVolta'
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
      <List.Icon style={lista.iconePosicao} icon={item.Destinacao}/>
      <View style={lista.topicos}>
    <Text>{item.Dia}</Text>
    <Text>{'R$ '+item.Quantia}</Text>
    <Text>{item.Desc}</Text>
    <Text>{item.Credito}</Text>
    </View>
    <List.Icon style={lista.verMais}icon={'chevron-right'} color={'green'}/>
  </TouchableOpacity>
);

verTable()
return (
    <View>
      <CbSemVolta title="Rendas"/>
      <View>
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
  lista:{
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
  topicos:{
    left:70
  }
    
})
export default StackRendas;