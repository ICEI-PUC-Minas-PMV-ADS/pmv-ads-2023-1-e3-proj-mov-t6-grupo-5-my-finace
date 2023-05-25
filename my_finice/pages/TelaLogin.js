import React, {useState} from 'react';
import { Button, RadioButton, Text, TextInput } from 'react-native-paper';
import Input from "../componentes/Input";
import {View, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Cb from "../componentes/Cb";
import { validarlogin } from '../Services/LoginDB';
import { FontAwesome5 } from '@expo/vector-icons'


function Login() {
const navigation = useNavigation()
const[email, setEmail] = useState () 
const[senha, setPassword] = useState () 
const[IsPassword, setIsPassword] = useState(true)


async function recuperarcadastro () {
 
<ActivityIndicator
  size={24}
  color="FFF"   
/> 
const dados = {
  email: email,
  senha: senha
}

if (dados.email != null && dados.senha != null) {
  const result = await validarlogin(dados)
    if(result == 'Validado com sucesso'){
      navigation.navigate('Home')
    }

} 

}

return(
<View>
      <View style={style.titulo}>
         <Text style={style.texto01}>MY FINANCE</Text>
         <Text style={style.texto02}>Bem-Vindo (a)</Text>
      </View>

   <View style={style.campos}>
   <Input
      label="Email"
      value={email}
      placeholder=""
      onChangeText={email => setEmail(email)}
   />
      <Input
      label="Password"
      value={senha}
      placeholder=""
      onChangeText={senha => setPassword(senha)}
      secureTextEntry={IsPassword}
   />

    <TouchableOpacity style={style.olho} onPress={() => setIsPassword(!IsPassword)}>
    {IsPassword == true ?
    <FontAwesome5 name="eye-slash" size={24} color="black" />
    :
    <FontAwesome5 name="eye" size={24} color="black" />
    }
    </TouchableOpacity>

    <Button style={style.save} mode="contained" onPress={() =>recuperarcadastro()} >
      ENTRAR 
     
    </Button>
  </View>

    <TouchableOpacity style={style.div} onPress={() => navigation.navigate('TelaCadastro')} >
      <Text style={style.cadastro}>Ainda não possui uma conta?</Text>
    </TouchableOpacity>
    
</View>

  );
}

const style = StyleSheet.create({
  titulo:{
    top: 150,

  },
  texto01:{
    fontStyle: "impact",
    fontSize: 52,
    textAlign: "center",
    color:"green",
  },
  texto02:{
    fontStyle: "italic",
    textAlign: "center",
  },
  campos:{
  top:230,
  },
  save:{
    backgroundColor:"green",
    top:30,
  },
  div:{
    top:285,
    left:90,
    margin:8,
  },
  sel:{
    margin:8,
  },
  cadastro:{
    color:"green",
  },
olho:{
  left:340,
  bottom:45,  

}
})


export default Login;