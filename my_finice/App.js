
//import cabecalho from "./componentes/header.js";
import React,{useState}from "react";
import { View,Text,StyleSheet } from "react-native";
import { TextInput,RadioButton,Switch,Button} from "react-native-paper";

function App() {
const [data,setdata] = useState('');
const [checked, setChecked] = React.useState('sim');
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
      <Text>
        {"Repete ?"}
        <Switch color="green" label="repete"value={isSwitchOn} onValueChange={onToggleSwitch} />
      </Text>
      <Text>
      {"Categoria da despesa"}
      </Text>

      <Text>
        {"Educação"}
        <RadioButton
          color="green"
          value="sim"
          status={ checked === 'sim' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('sim')}
        />
         </Text>
         <Text>
        {"Saúde"}
        <RadioButton
        color="green"
          value="Saúde"
          status={ checked === 'Saúde' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('Saúde')}
        />
         </Text>
         <Text>
        {"Alimentação"}
        <RadioButton
        color="green"
          value="Alimentação"
          status={ checked === 'Alimentação' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('Alimentação')}
        />
        </Text>
        <Text>
          {"Lazer"}
          <RadioButton
            value="Lazer"
            color="green"
            status={ checked === 'Lazer' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('Lazer')}
          />
        </Text>
        <Text>
          {"Outros"}
          <RadioButton
            value="Outros"
            color="green"
            status={ checked === 'Outros' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('Outros')}
          />
        </Text>
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
  radios:{
    color:"green"
  }
})


export default App;
