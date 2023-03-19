import React,{useState}from "react";
import { View,StyleSheet } from "react-native";
import { TextInput,RadioButton,Switch,Button,Text, Appbar } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Cb from "../componentes/Cb";
import Input from "../componentes/Input";
function Cadastrodespesas() {
  const [value, setValue] = React.useState('first');
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <SafeAreaProvider>
        <View>
            <Cb title="2"/>
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
    top:100
  },
  check:{
    margin:8
  },
  s:{
    top:-15,
   
  }
})


export default Cadastrodespesas;
