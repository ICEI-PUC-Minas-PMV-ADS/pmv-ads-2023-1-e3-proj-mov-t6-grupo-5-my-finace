
//import cabecalho from "./componentes/header.js";
import React,{useState}from "react";
import { View,StyleSheet } from "react-native";
import { TextInput,RadioButton,Switch,Button,Text} from "react-native-paper";

function App() {
  const [value, setValue] = React.useState('first');
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View>
      <View>
      <TextInput
        label="Data de cadastro"
        placeholder=""
        style={style.input}
        mode="outlined"
        theme={{ colors: { primary: 'green',underlineColor:'transparent',}}}
      />
        <TextInput
        label="Valor"
        placeholder="R$0,00"
        style={style.input}
        mode="outlined"
        keyboardType="decimal-pad"
        theme={{ colors: { primary: 'green',underlineColor:'transparent',textColor:'red'}}}
      />
        <TextInput
        label="Descrição"
        placeholder=""
        style={style.input}
        mode="outlined"
        theme={{ colors: { primary: 'green',underlineColor:'transparent',}}}
      />
     <View style={style.check}>
      <Text>Categoria da despesa</Text>
        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
          <RadioButton.Item color="green"label="Saúde" value="Saúde" />
          <RadioButton.Item color="green" label="Educação" value="Educação" />
          <RadioButton.Item color="green" label="Lazer" value="Lazer" />
          <RadioButton.Item color="green" label="Outros" value="Outros" />    
        </RadioButton.Group>
        
      <Text variant="bodyMedium"> Repete ?</Text>
        <Switch style={style.s} color="green" label="repete"value={isSwitchOn} onValueChange={onToggleSwitch} />
            <Button style={style.botao} mode="contained" onPress={() => console.log('Pressed')}>
            SALVAR
          </Button>
      </View>
    </View>
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
    top:100
  },
  check:{
    margin:8
  },
  s:{
    top:-15,
   
  }
})


export default App;
