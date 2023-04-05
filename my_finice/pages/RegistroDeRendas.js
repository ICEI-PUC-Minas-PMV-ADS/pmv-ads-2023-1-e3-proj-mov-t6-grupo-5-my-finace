import React, {useState} from 'react';
import { Appbar, Button, RadioButton, Text, TextInput, DataTable } from 'react-native-paper';
import Input from "../componentes/Input";
import {View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
import Cb from "../componentes/Cb";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const RegistroDeRendas = () => {
  const [value, setValue] = React.useState('first');

    return (

      <SafeAreaProvider>
        <View>
        <Cb icon="keyboard-backspace" title="Registro de Rendas" goBack={()=>navigation.goBack()}/>

          <View>
            <Input
                label="Descrição de renda"
                placeholder=""
              />
                <Input
                label="Valor"
                placeholder="R$0,00"
                keyboardType="decimal-pad"
            
              />
              <Input
                label='Data'
                placeholder='01/01/1900'
              />

              <View style={style.sel}>
            <Text>Destinação de Rendas</Text>
              <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                <RadioButton.Item color="green"label="Investimentos" value="Investimentos" />
                <RadioButton.Item color="green" label="Despesa Fixa" value="Despesa Fixa" />
                <RadioButton.Item color="green" label="Poupança" value="Poupança" />
                <RadioButton.Item color="green" label="Outros" value="Outros" />    
              </RadioButton.Group>

                <Button style={style.save} mode="contained" onPress={() => console.log('Pressed')}>
                  SALVAR
                </Button>

                </View>

            </View>

        </View>

  </SafeAreaProvider>
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