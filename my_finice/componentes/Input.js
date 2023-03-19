import React,{useState}from "react";
import { View,StyleSheet } from "react-native";
import { TextInput,RadioButton,Switch,Button,Text, Appbar } from "react-native-paper";

const Input =(props) =>{
    return (
        <TextInput
            style={style.input}
            mode="outlined"
            theme={{ colors: { primary: 'green',underlineColor:'transparent',}}}
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