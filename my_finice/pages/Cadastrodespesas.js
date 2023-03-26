import React,{useState}from "react";
import { View,StyleSheet,Alert } from "react-native";
import { TextInput,RadioButton,Switch,Button,Text, Appbar } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Cb from "../componentes/Cb";
import Input from "../componentes/Input";
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
function Cadastrodespesas() {
  const [value, setValue] = React.useState('first');
  const navigation = useNavigation();
  return (

    <SafeAreaProvider>
        <View>

            <Cb icon="keyboard-backspace" title="CADASTRO DE DESPESAS" goBack={()=>navigation.goBack()}/>
            
            <View>
              <Input
                label="Data da despesa"
                placeholder=""
              />
                <Input
                label="Valor"
                placeholder="R$0,00"
                keyboardType="decimal-pad"
            
              />
                <Input
                label="Descrição"
                placeholder=""
              />
              <Input
                label="Numero de parcelas"
                placeholder=""
                keyboardType="numeric"
              />
          <View style={style.check}>
            <Text>Categoria da despesa</Text>
              <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                <RadioButton.Item color="green"label="Saúde" value="Saúde" />
                <RadioButton.Item color="green" label="Educação" value="Educação" />
                <RadioButton.Item color="green" label="Lazer" value="Lazer" />
                <RadioButton.Item color="green" label="Outros" value="Outros" />    
              </RadioButton.Group>
              
                  <Button style={style.botao} mode="contained" onPress={() => 
                   Alert.alert('Ops!', 'Algo deu errado, por favor verifique os dados preenchidos', [
                     {
                       text: 'Cancel',
                       onPress: () => console.log('Cancel Pressed'),
                       style: 'cancel',
                     },
                     {text: 'OK', onPress: () => console.log('OK Pressed')},
                   ])
                  
                  
                  
                  }>
                  SALVAR
                </Button>
            </View>
        </View>
    </View>
  </SafeAreaProvider>
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
    top:40
  },
  check:{
    margin:8
  },
  s:{
    top:-15,
   
  }
})


export default Cadastrodespesas;
