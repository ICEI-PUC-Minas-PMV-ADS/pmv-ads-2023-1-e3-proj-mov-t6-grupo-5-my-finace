import { StyleSheet, View} from 'react-native';
import React,{useState,useEffect}from "react";
import CbSemVolta from '../componentes/CbSemVolta'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer,useIsFocused } from "@react-navigation/native";
import { VictoryBar, VictoryChart, VictoryLabel } from "victory-native";
import {pegarInformacaoParaGrafico} from '../Services/Despesasdb';

function EvolucaoDespesas() {
  const IsFocused = useIsFocused();
  const [data,setData] = useState([])

  useEffect (()=>{
    pegarInformacaoParaGrafico().then((dados)=>{
     setData(dados)
    }); 
  },[IsFocused])

console.log(data)
  return (
    <View>
      <CbSemVolta title="Evolução"/>
      <VictoryChart width={350}>
          <VictoryBar data={data} x="Data" y="Valor" labels={data.map(item => item.Valor)} />
        </VictoryChart>
    </View>
  )

  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
 
  }})
export default EvolucaoDespesas;