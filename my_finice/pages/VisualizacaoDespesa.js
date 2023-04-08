import { StyleSheet, View,Text} from 'react-native';
import{useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import Botaoflutuante  from '../componentes/Botaoflutuante';
import Cb from '../componentes/Cb';
import { criartabela } from '../Services/Despesasdb';
import React from 'react';
import { recuperandoDespesas } from '../Services/Despesasdb';
function MyStack() {
 
    useEffect (()=>{
      criartabela()
    },[])
    
    
  const navigation = useNavigation();
  async function verTabela(){
    const recupera = await recuperandoDespesas()
    console.log(recupera)
    }
 verTabela()
  return (
    <View>
      <Cb title="Despesas"/>
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