import { StyleSheet, View,Text,FlatList,StatusBar, TouchableOpacity, Alert} from 'react-native';
import{List} from 'react-native-paper';
import { ProgressBar} from 'react-native-paper';
import{useEffect, useState} from 'react';
import { useNavigation,useIsFocused } from '@react-navigation/native';
import Botaoflutuante  from '../../componentes/Botaoflutuante';
import CbSemVolta from '../../componentes/CbSemVolta';
import { CreateTable,getMetas } from '../../Services/MetasDB';
import React from 'react';

function Metas() {
  const [valorAdicional, setValorAdicional] = useState({});
  const [tituloMeta, setTituloMeta] = useState([]);
  const IsFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    CreateTable();
  }, []);

  useEffect(() => {
    verTabela();
  }, [IsFocused]);

  async function verTabela() {
    const dados = await getMetas();
    setTituloMeta(dados);
  }

  const adicionarValor = (item) => {
    const valorAtual = valorAdicional[item.id] || 0;
    const novoValor = valorAtual + item.poupar_mes;
    setValorAdicional({
      ...valorAdicional,
      [item.id]: novoValor,
    });

    if (novoValor >= item.valor_meta) {
      Alert.alert('Meta Concluída!');
    }
  };

  const Item = ({ item, index }) => {
    const valorAtual = valorAdicional[item.id] || 0;
    const porcentagemMeta = (valorAtual / item.valor_meta) * 100 || 0;
    const itemStyle = index % 2 === 0 ? aviso.item : [aviso.item, { backgroundColor: '#F5F5F5' }];

    return (
      <TouchableOpacity
        style={itemStyle}
        onPress={() => navigation.navigate('EditarMetas', { id: item.id })}
      >
        <List.Icon style={aviso.iconePosicao} />
        <View style={aviso.lista}>
          <Text style={{fontWeight: 'bold' }}>{item.titulo_meta}</Text>
          <Text>{'Valor: R$' + item.valor_meta}</Text>
          <Text>{'Descrição Meta: ' + item.descricao_meta}</Text>
          <Text>{'Valor a ser Poupado: R$ ' + item.poupar_mes}</Text>
          <Text>{`${porcentagemMeta}% da sua meta completa`}</Text>
          <TouchableOpacity
            onPress={() => adicionarValor(item)}
            style={{
              backgroundColor: 'green',
              padding: 5,
              marginTop: 10,
              width: 102,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: 'white' }}>Adicionar Valor</Text>
          </TouchableOpacity>
        </View>
        <List.Icon style={aviso.verMais} icon={'chevron-right'} color={'green'} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <CbSemVolta title="Metas" />
      <View>
        <FlatList
          data={tituloMeta}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Botaoflutuante onPress={() => navigation.navigate('RegistroMetas')} />
    </View>
  );
}
const aviso = StyleSheet.create({
    av:{
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
      paddingTop: 5,
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
    lista:{
      left:70
    }
})
export default Metas;