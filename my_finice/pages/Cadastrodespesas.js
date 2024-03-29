import React,{useState}from "react";
import { View,StyleSheet } from "react-native";
import {RadioButton,Button,Text} from "react-native-paper";
import Cb from "../componentes/Cb";
import Input from "../componentes/Input";
import { useNavigation } from '@react-navigation/native';
import {adicionarDespesas} from "../Services/Despesasdb";
function Cadastrodespesas() {
  const [d, setValue] = React.useState('tag-plus-outline');
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
      Parcela:Parcela,
      Categoria:d
    }
    await adicionarDespesas(despesa)
    navigation.goBack();

  }
  return (
        <View>
            <Cb title="CADASTRAR"  onPress={() => navigation.goBack()}/>
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
                  <Button style={style.botao} mode="contained" onPress={()=>{salve()}}>
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


export default Cadastrodespesas;
