import {useState, useEffect} from 'react';
import { Text, Surface, ProgressBar, List } from 'react-native-paper';
import {View, StyleSheet, FlatList,} from 'react-native';
import {useIsFocused } from "@react-navigation/native";
import CbSemVolta from '../componentes/CbSemVolta'
import { somaRendas, DestinacaoRend } from '../Services/RendasDb';

function VisualizacaoRendas() {
  const IsFocused = useIsFocused();
  const [quantia,setQuantia] = useState([]);
  const [Destinacao,setDestinacao] = useState([]);

  useEffect (()=>{
      somaRendas().then((dados)=>{
      setQuantia(dados)
    }); 
    DestinacaoRend().then((dtn)=>{
      setDestinacao(dtn)
    }); 
  },[IsFocused])

const Item = ({item}) => (
  <View style={styles.lista}>
    <Text>{item.destinacao}</Text>
    <ProgressBar progress={item.QTD/10} color={'green'} />
  </View>
);

return (

        <View>
    
        <CbSemVolta title="Visualização de Rendas"/>
      <Text style={styles.tt}>Saldo em conta</Text>
    <Surface style={styles.surface} elevation={4}>
        <Text style={styles.sd}>{'R$ ' + quantia[0].Valor} </Text>
    </Surface>

    <Text style={styles.dest}>Destinação dos Ganhos</Text>
      <FlatList
        data={Destinacao}
        renderItem={Item}
        keyExtractor={item => item.id}
        style={styles.t}
      />

    <Text style={styles.textodois}>Crédito Disponível</Text>

    <Surface style={styles.surfacedois} elevation={4}>
        <Text style={styles.sd}>{+quantia}</Text>
    </Surface>

        </View>

    );
}


const styles = StyleSheet.create({
    sd:{
      marginLeft: 8,
      fontSize:45,
    },
    surface:{
        padding: 0,
        marginTop: 15,
        marginLeft:12,
        height: 80,
        width: 370,
        justifyContent: 'center',
      },
      tt:{
        textAlign:'center',
        marginLeft: 12,
        marginTop: 15,
      },
      dest:{
        textAlign:'center',
        top:20,
      },
      textodois:{
        textAlign:'center',
        marginLeft: 12,
        marginTop: 90,
      },
      surfacedois:{
        padding: 0,
        marginTop: 15,
        marginLeft:12,
        height: 80,
        width: 370,
        justifyContent: 'center',
      },
      t:{
        top:60,
      },
      lista:{
        width:320,
        padding:2,
        left:20,
      },
})

export default VisualizacaoRendas;