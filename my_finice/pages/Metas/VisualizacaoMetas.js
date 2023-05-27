import { StyleSheet, View,Text,FlatList,StatusBar, TouchableOpacity} from 'react-native';
import{List} from 'react-native-paper';
import { ProgressBar} from 'react-native-paper';
import{useEffect, useState} from 'react';
import { useNavigation,useIsFocused } from '@react-navigation/native';
import Botaoflutuante  from '../../componentes/Botaoflutuante';
import CbSemVolta from '../../componentes/CbSemVolta';
import { CreateTable,getMetas } from '../../Services/MetasDB';
import React from 'react';

function Metas() {
    const [tituloMeta, setTituloMeta] = useState([])
    const IsFocused = useIsFocused();
    const navigation = useNavigation();
    useEffect (()=>{
        CreateTable()
    },[])

    async function verTabela(){
        useEffect(() => {
            getMetas().then((dados) => {
                setTituloMeta(dados)
            });
        },[IsFocused])
    }
    const Item = ({item}) => (
        <TouchableOpacity style={aviso.item} onPress={() => navigation.navigate('EditarMetas',{id:item.id})}>
        <List.Icon style={aviso.iconePosicao}/>
        <View style={aviso.lista}>
            <Text>{item.titulo_meta}</Text>
            <Text>{'Valor: R$' + item.valor_meta}</Text>
            <Text>{'Descrição Meta: ' + item.descricao_meta}</Text>
            <Text>{'Valor a ser Poupado: R$ ' + item.poupar_mes}</Text>
            <Text>{(item.valor_meta/item.poupar_mes)+ '% da sua meta completa'}</Text>
        </View>
        <List.Icon style={aviso.verMais} icon={'chevron-right'} color={'green'}/>
        </TouchableOpacity>
    );

    verTabela()
    return (
        <View>
            <CbSemVolta title="Metas"/>
            <View>
                <FlatList
                    data={tituloMeta}
                    renderItem={Item}
                    keyExtractor={item => item.id}
                />
            </View>
            <Botaoflutuante
                onPress={() => navigation.navigate('RegistroMetas')}
            />
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
    lista:{
      left:70
    }
})
export default Metas;