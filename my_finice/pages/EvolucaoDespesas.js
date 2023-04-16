import { StyleSheet, View} from 'react-native';
import React,{useState,useEffect}from "react";
import CbSemVolta from '../componentes/CbSemVolta'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer,useIsFocused } from "@react-navigation/native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import {pegarInformacaoParaGrafico} from '../Services/Despesasdb';

function EvolucaoDespesas() {
  const IsFocused = useIsFocused();
  const [data,setData] = useState()
  useEffect (()=>{
    pegarInformacaoParaGrafico().then((dados)=>{
     setData(dados)
    }); 
  },[IsFocused])

  async function puxarDados () {
    useEffect (()=>{
      pegarInformacaoParaGrafico().then((dados)=>{
       setData(dados)
      }); 
    },[IsFocused])

  }
puxarDados()
console.log(data)
  return (
    <View>
      <CbSemVolta title="Evolução"/>
      <VictoryBar data={data} x="Data" y="Valor"  style={{ data: { fill: "green", strokeWidth: 2 }}}  />
    </View>
  );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
 
  }})
export default EvolucaoDespesas;