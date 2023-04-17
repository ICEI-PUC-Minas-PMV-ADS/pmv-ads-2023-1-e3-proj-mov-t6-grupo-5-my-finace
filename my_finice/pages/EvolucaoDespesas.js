import { StyleSheet, View,Text} from 'react-native';
import React,{useState,useEffect}from "react";
import CbSemVolta from '../componentes/CbSemVolta'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer,useIsFocused } from "@react-navigation/native";
import { VictoryBar, VictoryChart, VictoryLabel } from "victory-native";
import {pegarInformacaoParaGrafico} from '../Services/Despesasdb';
import { BarChart, Grid, YAxis,XAxis} from 'react-native-svg-charts'
//import { BarChart, Grid, YAxis } from 'react-native-svg-charts'
import * as scale from 'd3-scale'

function EvolucaoDespesas() {
  const IsFocused = useIsFocused();
  const [data,setData] = useState([])

  useEffect (()=>{
    pegarInformacaoParaGrafico().then((dados)=>{
     setData(dados)
    }); 
  },[IsFocused])
  const fill = 'rgb(134, 65, 244)'
  const d = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80]

console.log(data)

const CUT_OFF = 50
const Labels = ({  x, y, bandwidth, data }) => (
  //console.log(data.map(item => item.Data)),
  data.map( item => (
      <Text
          key={ item.Valor }
          x={ item.Valor }
          y={ item.Valor}
          fontSize={ 14 }
         // fill={ value > CUT_OFF ? 'white' : 'black' }
          alignmentBaseline={ 'middle' }
      >
          {item.Valor}
      </Text>
  ))
)
  return (
    <View>
      <CbSemVolta Title="Evolução"></CbSemVolta>
     
    <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16 }}>
 
 <BarChart
      style={{ flex: 1, marginLeft: 8 }}
      data={data}
      horizontal={false}
      yAccessor={({ item }) => item.Valor}
      svg={{ fill: 'green' }}
      contentInset={{ top: 10, bottom: 10 }}
      spacing={0.2}
      gridMin={0}>
  <Grid direction={Grid.Direction.HORIZONTAL}/>
  <Labels/>
  </BarChart>
</View>
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