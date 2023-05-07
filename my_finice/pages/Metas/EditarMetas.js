import React,{useState,useEffect}from "react";
import { NavigationContainer,useIsFocused } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import { View,Alert} from 'react-native';
import {StyleSheet } from "react-native";
import {Text,RadioButton} from "react-native-paper";
import Cb from "../../componentes/Cb";
import Input from "../../componentes/Input";
import IconBottum from "../../componentes/IconBottum"
import {getMetaEspecifica,deleteMeta,atualizarMeta} from "../../Services/MetasDB";
const Main =({route}) => {
    const {id} = route.params;
    const IsFocused = useIsFocused();
    const navigation = useNavigation();
    const [tituloMeta,setTituloMeta]= React.useState();
    const [valorMeta,setValorMeta]= React.useState();
    const [descricaoMeta,setDescricaoMeta]= React.useState();
    const [pouparMes,setPouparMes]= React.useState(0);

    verTabela()
    async function verTabela(){
        useEffect (() => {
            getMetaEspecifica(id).then((dados) => {
                preencher(dados)
            });
        },[IsFocused])
    }

    function preencher(meta){
        setTituloMeta(meta[0].titulo_meta)
        setValorMeta(meta[0].valor_meta.toString())
        setDescricaoMeta(meta[0].descricao_meta)
        setPouparMes(meta[0].poupar_mes.toString())
    }
    const confirmarDelete = () =>
        Alert.alert('Excluir', 'Deseja realmente continuar com a exclusão ?', [
            {
                text: 'Cancelar',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',StyleSheet:{color:'#fff'}
            },
            {text: 'Confirmar', onPress: () => deletar()},
        ]);
    
        async function salvar(){
            const meta = {
                id: id,
                Titulo: tituloMeta,
                Valor: valorMeta,
                Descricao: descricaoMeta,
                PouparMes: pouparMes
            }
            console.log(await atualizarMeta(meta))
            navigation.goBack();
        }

        async function deletar(){
            console.log(await deleteMeta(id))
            navigation.goBack();
        }
        return(
            <View>
                <Cb title="Cadastrar Meta" onPress={() => navigation.goBack()}/>
                <View>
                    <Input
                        label="Titulo"
                        placeholder=""
                        value={tituloMeta}
                        onChangeText={tituloMeta => setTituloMeta(tituloMeta)}
                        />
                    <Input
                        placeholder="R$0,00"
                        keyboardType="decimal-pad"
                        value={valorMeta}
                        onChangeText={valorMeta => setValorMeta(valorMeta)}
                        />
                    <Input
                        label="Descrição"
                        placeholder=""
                        value={descricaoMeta}
                        onChangeText={descricaoMeta => setDescricaoMeta(descricaoMeta)}
                        />
                    <Input
                        label="Poupar por mês"
                        placeholder="R$0,00"
                        keyboardType="decimal-pad"
                        value={pouparMes}
                        onChangeText={pouparMes => setPouparMes(pouparMes)}
                        />
                </View>

                <View style={style.rodape}>
                    <IconBottum style={style.botao_direita} icon="content-save-check-outline" iconColor="green" onPress={()=>{salvar()}}/>
                    <IconBottum  style={style.botao_esquerda} icon="delete-outline" iconColor="red"onPress={()=>{confirmarDelete()}}/>
                </View>
            </View>
        )
}
const style = StyleSheet.create({
    input:{
      margin:8,
      backgroundColor:"#fff",
      borderColor:"red",
      color:'red'
    },
    botao:{
      backgroundColor:"green",
      top:50
    },
    check:{
      margin:9,
    },
    botao_esquerda:{
      left:150,
      bottom:57
    },
    botao_direita:{
      right:100,
   
    },
    rodape:{
      textAlign:"center",
      left:120,
      top:30
    }
  })

export default Main;