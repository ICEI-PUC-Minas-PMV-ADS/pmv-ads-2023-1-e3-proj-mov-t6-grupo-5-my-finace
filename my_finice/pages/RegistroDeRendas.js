import React, {useState} from 'react';
import { Button, RadioButton, Text } from 'react-native-paper';
import Input from "../componentes/Input";
import {View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Cb from "../componentes/Cb";
import {adicionarRenda} from "../Services/RendasDb";
function RegistroDeRendas () {
  const [dt, setValue] = React.useState('tag-plus-outline');
  const [dia,setDia]= React.useState();
  const [quantia,setQuantia]= React.useState();
  const [desc,setDesc]= React.useState();
  const [credito,setCredito]= React.useState();
  const navigation = useNavigation();
    
  async function salvar(){
    const renda = {
      Dia:dia,
      Quantia:quantia,
      Desc:desc,
      Credito:credito,
      Destinacao:dt
    }
    await adicionarRenda(renda)
    navigation.goBack();
     

  }


    return (
        <View>
        <Cb title="Registro de Rendas" onPress={()=>navigation.goBack()}/>
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

                <Button style={style.save} mode="contained" onPress={()=>{salvar()}}>
                  SALVAR
                </Button>
        </View>
    );


}
const style = StyleSheet.create({
  save:{
    backgroundColor:"green",
    top:40
  },
  sel:{
    margin:8
  },
})

export default RegistroDeRendas;