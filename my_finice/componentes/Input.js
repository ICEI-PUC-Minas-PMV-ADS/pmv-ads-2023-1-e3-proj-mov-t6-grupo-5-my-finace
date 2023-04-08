import React,{useState}from "react";
import { View,StyleSheet } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TextInput,} from "react-native-paper";

const Input =(props) =>{

    return (
      
        <TextInput
            style={style.input}
            mode="outlined"
            theme={{ colors: { primary: 'green',underlineColor:'transparent'}}}
            {...props}
            />
    );
}
const style = StyleSheet.create({
    input:{
      margin:8,
      backgroundColor:"#fff",
    },
 }
)
export default Input;