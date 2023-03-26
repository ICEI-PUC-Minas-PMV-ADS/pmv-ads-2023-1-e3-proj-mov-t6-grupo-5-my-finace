import { StyleSheet, View,Text,FlatList } from 'react-native';
import React,{useEffect, useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import Botaoflutuante  from '../componentes/Botaoflutuante';
import Cb from '../componentes/Cb';
import { insertDespesas,getDespesas} from '../Services/Despesasdb';
import Icon from 'react-native-vector-icons/MaterialIcons'
function MyStack() {

  const navigation = useNavigation();
  const [despesas,setDepesas] = useState([])

  useEffect(()=>{
    getDespesas().then((dados)=>{
      console.log(dados);
      setDepesas(dados);

      });
  },[]);

  
  return (
    <View>
      <Cb title="Visualização das despesas"/>
      
      <FlatList
        data={despesas}
        keyExtractor={item => item.id}
      />




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
    }
})
export default MyStack;