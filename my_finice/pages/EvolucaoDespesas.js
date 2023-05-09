import { StyleSheet, View,Text,FlatList} from 'react-native';
import { ProgressBar} from 'react-native-paper';
import React,{useState,useEffect}from "react";
import CbSemVolta from '../componentes/CbSemVolta'
import {useIsFocused } from "@react-navigation/native";
import { BarChart, XAxis,YAxis,Grid } from 'react-native-svg-charts'
import * as scale from 'd3-scale'

//QQimport { VictoryBar, VictoryChart, VictoryLabel,VictoryGroup,VictoryTheme } from "victory-native";
import {pegarInformacaoParaGrafico,gastosPorCategoria} from '../Services/Despesasdb';

function EvolucaoDespesas() {
  const IsFocused = useIsFocused();
  const [data,setData] = useState([]);
  const [Categoria,setCategoria] = useState([]);

  useEffect (()=>{
      pegarInformacaoParaGrafico().then((dados)=>{
      setData(dados)
    }); 
    gastosPorCategoria().then((ctg)=>{
        setCategoria(ctg)
      }); 
    },[IsFocused])
 
  const Item = ({item}) => (
    <View style={styles.lista}>
      <Text>{item.categoria}</Text>
      <ProgressBar progress={item.QTD/100} color={'green'} />
    </View>
  );
console.log(data)
  return ( 
    <View>
      <CbSemVolta title="Evolução"/>
      <View style={{ flexDirection: 'row', height: 200, width:350, top:40,paddingVertical: 16 }}>
                <YAxis
                    data={data}
                    yAccessor={({ index }) => index}
                    scale={scale.scaleBand}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    formatLabel={(_, index) => data[ index ].Data}
                />
                <BarChart
                    style={{ flex: 1, marginLeft: 8 }}
                    data={data}
                    horizontal={true}
                    yAccessor={({ item }) => item.Valor}
                    svg={{ fill: 'green' }}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    gridMin={0}
                >
                    
                </BarChart>
                </View>
    <Text style={styles.titulo}>Concentração dos gastos</Text>
      <FlatList
        data={Categoria}
        renderItem={Item}
        keyExtractor={item => item.id}
        style={styles.t}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
  },
  lista:{
    width:320,
    padding:2,
    left:20,
    
  },
  t:{
      top:200
  },
  titulo:{
    textAlign:'center',
    top:150
  }
})
export default EvolucaoDespesas;