import React,{useState,useEffect}from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import { View} from 'react-native';
import {StyleSheet } from "react-native";
import {Button,Text,RadioButton} from "react-native-paper";
import Cb from "../componentes/Cb";
import Input from "../componentes/Input";
import {recuperandoDespesasEspecifica,deleteDespesas,atualizarDespesas} from "../Services/Despesasdb"
const Stack  = createNativeStackNavigator();
const Main =({ route}) =>{
    const {id} = route.params;
    const [extrato,setExtrato] = useState([])
    async function verTabela(){
        useEffect (()=>{
            recuperandoDespesasEspecifica(id).then((dados)=>{
                setExtrato(dados)
            }); 
        },[])
        
    }
    verTabela()
    console.log(extrato)
    
    const navigation = useNavigation();
    const [d, setValue] = React.useState(extrato.Categoria);
    const [data,setData]= React.useState(extrato.Data);
    const [valor,setValor]= React.useState(extrato.Valor);
    const [Descricao,setDescricao]= React.useState(extrato.Descricao);
    const [Parcela,setParcela]= React.useState(extrato.Parcela);
   //Recuperando tabela
    async function verTabela(){
        useEffect (()=>{
          recuperandoDespesasEspecifica(id).then((dados)=>{
            setExtrato(dados)
          }); 
        },[])
        
      }
    verTabela()
    //Atualizando dados
    async function salve(){
        const despesa = {
        Data:data,
        Valor:valor,
        Descricao:Descricao,
        parcela:Parcela,
        Categoria:d
        }
        await atualizarDespesas(despesa)
        navigation.goBack();
    }
    //Deletando dados
    async function deletar(){
       await deleteDespesas(id)
        navigation.goBack();
    }
    return(

        <View>
        <Cb icon="keyboard-backspace" title="CADASTRAR" goBack={()=>navigation.goBack()}/>
          <View>
          <Input 
            label="Data da despesa"
            placeholder=""
            value={data}
            onChangeText={data => setData(data)}
            />
            <Input 
            placeholder="R$0,00"
            keyboardType="decimal-pad"
            value={valor}
            onChangeText={valor => setValor(valor)}
            
          />
            <Input
            label="Descrição"
            placeholder=""
            value={Descricao}
            onChangeText={Descricao => setDescricao(Descricao)}
            />
          <Input
            label="Numero de parcelas"
            placeholder=""
            keyboardType="numeric"
            value={Parcela}
            onChangeText={Parcela => setParcela(Parcela)}
            />
        </View>

        <View>
        <Text style={style.texto}>Categoria da despesa</Text>
          <RadioButton.Group onValueChange={d => setValue(d)} value={d}>
            <RadioButton.Item color="green"label="Saúde" value="hospital-box-outline" />
            <RadioButton.Item color="green" label="Educação" value="school" />
            <RadioButton.Item color="green" label="Lazer" value="ferris-wheel" />
            <RadioButton.Item color="green" label="Alimentação" value="food-turkey" />
            <RadioButton.Item color="green" label="Outros" value="tag-plus-outline" />    
          </RadioButton.Group>
          </View>
          <Button onPress={()=>{salve()}}>salvar</Button>
          <Button onPress={()=>{deletar()}}>apagar</Button>
             
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
      left:12
    },
    botao:{
      backgroundColor:"green",
      top:50
    },
    check:{
      margin:9,
    },
  
  })
  

export default Main;