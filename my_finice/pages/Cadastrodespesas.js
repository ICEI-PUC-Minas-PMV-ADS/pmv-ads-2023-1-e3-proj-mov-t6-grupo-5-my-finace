import React,{useState}from "react";
import { View,StyleSheet } from "react-native";
import { TextInput,RadioButton,Switch,Button,Text, Appbar } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Cb from "../componentes/Cb";
import Input from "../componentes/Input";
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
import {adicionarDespesas} from "../Services/Despesasdb";
function Cadastrodespesas() {
  const [d, setValue] = React.useState('first');
  const [data,setData]= React.useState();
  const [valor,setValor]= React.useState();
  const [Descricao,setDescricao]= React.useState();
  const [Parcela,setParcela]= React.useState();
  const navigation = useNavigation();
    
  async function salve(){
    const despesa = {
      Data:data,
      Valor:valor,
      Descricao:Descricao,
      parcelas:Parcela,
      Categoria:d
    }
    await adicionarDespesas(despesa)
     

  }
  return (
        <View>
            <Cb icon="keyboard-backspace" title="CADASTRO DE DESPESAS" goBack={()=>navigation.goBack()}/>
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
            <Text>Categoria da despesa</Text>
              <RadioButton.Group onValueChange={d => setValue(d)} value={d}>
                <RadioButton.Item color="green"label="Saúde" value="Saúde" />
                <RadioButton.Item color="green" label="Educação" value="Educação" />
                <RadioButton.Item color="green" label="Lazer" value="Lazer" />
                <RadioButton.Item color="green" label="Outros" value="Outros" />    
              </RadioButton.Group>
              </View>
              
              
                  <Button style={style.botao} mode="contained" onPress={()=>{

                   salve()
                  }
                  }>
                  SALVAR
                </Button>
        </View>
   

  );
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
  },
  check:{
    margin:9,
  },

})


export default Cadastrodespesas;
