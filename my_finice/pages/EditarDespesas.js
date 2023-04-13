import React,{useState,useEffect}from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer,useIsFocused } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import { View} from 'react-native';
import {StyleSheet } from "react-native";
import {Button,Text,RadioButton,IconButton, MD3Colors} from "react-native-paper";
import Cb from "../componentes/Cb";
import Input from "../componentes/Input";
import IconBottum from "../componentes/IconBottum"
import {recuperandoDespesasEspecifica,deleteDespesas,atualizarDespesas} from "../Services/Despesasdb"
const Stack  = createNativeStackNavigator();
const Main =({ route}) =>{
   
    const {id} = route.params;
    const IsFocused = useIsFocused();
    const [extrato,setExtrato] = useState({})
    const navigation = useNavigation();
    const [d, setValue] = React.useState();
    const [data,setData]= React.useState();
    const [valor,setValor]= React.useState(0);
    const [Descricao,setDescricao]= React.useState();
    const [Parcela,setParcela]= React.useState();
    
  verTabela()
    //Recuperando tabela
    async function verTabela(){
        useEffect (()=>{
          recuperandoDespesasEspecifica(id).then((dados)=>{
            console.log(dados)
            console.log(dados[0].Valor)
           preencher(dados)
          }); 
        },[IsFocused])
      }
      
      function preencher(extrato){
        setData(extrato[0].Data)
        setDescricao(extrato[0].Descricao)
        setValue(extrato[0].Categoria)
        setParcela(extrato[0].Parcela)
        setValor(extrato[0].Valor)
        console.log(valor)
      }

    //Atualizando dados
    async function salve(){
        const despesa = {
        Data:data,
        Valor:valor,
        Descricao:Descricao,
        Parcela:Parcela,
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
          <View style={style.rodape}>
          <IconBottum icon="content-save-check-outline" iconColor="green" onPress={()=>{salve()}}/>
          <IconBottum  style={style.botao_esquerda} icon="delete-outline" iconColor="red"onPress={()=>{deletar()}}/>
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