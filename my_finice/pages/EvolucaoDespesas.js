import { StyleSheet, View,Text,FlatList} from 'react-native';
import { ProgressBar} from 'react-native-paper';
import React,{useState,useEffect}from "react";
import CbSemVolta from '../componentes/CbSemVolta'
import {useIsFocused } from "@react-navigation/native";
import { VictoryBar, VictoryChart, VictoryLabel,VictoryGroup,VictoryTheme } from "victory-native";
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

  console.log(data)
 
  const Item = ({item}) => (
    <View style={styles.lista}>
      <Text>{item.categoria}</Text>
      <ProgressBar progress={item.QTD/100} color={'green'} />
    </View>
  );

  return ( 
    <View>
      <CbSemVolta title="Evolução"/>
      <VictoryChart   theme={VictoryTheme.material} domainPadding={{ x: 50 }}>
        <VictoryGroup>
          <VictoryBar 
              data={data} 
              x="Data" 
              y="Valor" 
              labels={({ datum }) => datum.Valor}
              style={{ labels: { fill: "#000" }, data:{fill:"green"}}}
               labelComponent={<VictoryLabel dy={3}/>}
              > 
          </VictoryBar>
        </VictoryGroup>
      </VictoryChart>
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
      top:100
  },
  titulo:{
    textAlign:'center',
    top:30
  }
})
export default EvolucaoDespesas;