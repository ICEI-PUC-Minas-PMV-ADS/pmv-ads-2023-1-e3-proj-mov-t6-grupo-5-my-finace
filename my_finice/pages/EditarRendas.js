import React,{useEffect}from "react";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import { View, Alert} from 'react-native';
import {StyleSheet } from "react-native";
import { Text,RadioButton } from "react-native-paper";
import Cb from "../componentes/Cb";
import Input from "../componentes/Input";
import IconBottum from "../componentes/IconBottum"
import {recuperandoRendasEspecifica,deleteRendas,atualizarRendas} from "../Services/RendasDb"

const Main =({ route}) =>{
    const {id} = route.params;
    const IsFocused = useIsFocused();
    const [dt, setValue] = React.useState();
    const [dia,setDia]= React.useState();
    const [quantia,setQuantia]= React.useState();
    const [desc,setDesc]= React.useState();
    const [credito,setCredito]= React.useState();
    const navigation = useNavigation();
    
  verTable()
    //Recuperando tabela
    async function verTable(){
        useEffect (()=>{
          recuperandoRendasEspecifica(id).then((dados)=>{
           preencher(dados)
          }); 
        },[IsFocused])
        }

        function preencher(extratoRendas){
          setDia(extratoRendas[0].Dia)
          setDesc(extratoRendas[0].Desc)
          setValue(extratoRendas[0].Destinacao)
          setCredito(extratoRendas[0].Credito)
          setQuantia(extratoRendas[0].Quantia.toString())
          setCredito(extratoRendas[0].Credito.toString())
          
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

    //Atualizando dados
    async function salvar(){
        const renda = {
        id:id,
        Dia:dia,
        Quantia:quantia,
        Desc:desc,
        Credito:credito,
        Destinacao:dt
        }
        await atualizarRendas(renda)
        navigation.goBack();
    }
    //Deletando dados
    async function deletar(){
       await deleteRendas(id)
        navigation.goBack();
    }

    return (
        <View>
        <Cb title="Editar Rendas" onPress={()=>navigation.goBack()}/>
          <View>
            <Input
                label="Descrição de renda"
                value={desc}
                placeholder=""
                onChangeText={desc => setDesc(desc)}
              />
                <Input
                label="Valor"
                value={quantia}
                placeholder="R$0,00"
                keyboardType="decimal-pad"
                onChangeText={quantia => setQuantia(quantia)}
              />
              <Input
                label="Credito Disponível"
                value={credito}
                placeholder="R$0,00"
                keyboardType="decimal-pad"
                onChangeText={credito => setCredito(credito)}
              />
              <Input
                label='Data'
                value={dia}
                placeholder='01/01/1900'
                onChangeText={dia => setDia(dia)}
              />
               </View>

              <View style={style.sel}>
            <Text>Destinação de Rendas</Text>
              <RadioButton.Group onValueChange={dt => setValue(dt)} value={dt}>
                <RadioButton.Item color="green"label="Investimentos" value="bank-transfer" />
                <RadioButton.Item color="green" label="Despesa Fixa" value="newspaper-check" />
                <RadioButton.Item color="green" label="Poupança" value="safe" />
                <RadioButton.Item color="green" label="Outros" value="head-question" />       
              </RadioButton.Group>
                </View>
          <View style={style.rodape}>
          <IconBottum icon="content-save-check-outline" iconColor="green" onPress={()=>{salvar()}}/>
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
    texto:{
      left:126
    },
    botao:{
      backgroundColor:"green",
      top:50
    },
    check:{
      margin:9,
    },
    botao_esquerda:{
      left:50,
      bottom:57
    },
    rodape:{
      textAlign:"center",
      left:120,
      top:30
    }
  
  })
  

export default Main;