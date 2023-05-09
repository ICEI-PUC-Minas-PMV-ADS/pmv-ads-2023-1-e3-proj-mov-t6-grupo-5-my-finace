import React, {useEffect, useState} from 'react';
import { Button, RadioButton, Text } from 'react-native-paper';
import Input from "../componentes/Input";
import {Image, View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Cb from "../componentes/Cb";
import {criartabela,cadastrar} from '../Services/LoginDB'


function Login() {
const navigation = useNavigation()
const [username, setUsername] = useState('');
const[email, setEmail] = useState () 
const[senha, setPassword] = useState () 

useEffect(()=> {
  criartabela ()
})

async function criarcadastro () {
  const dados = {
    username: username,
    email: email,
    senha: senha
    
  }

await cadastrar (dados)

}



  return(
    
      
    <View>
      <Cb title="CADASTRO MY FINANCE" onPress={()=>navigation.goBack()}/>

        <View style={style.campos}>
          <Input
          label="Username"
          value={username}
          placeholder=""
          onChangeText={username => setUsername(username)}
          />
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
              />
            
            </View>

                <Button style={style.save} mode="contained" onPress={()=>{criarcadastro()}}>
                  CRIAR CADASTRO  
                </Button>
            </View>

  );
}

const style = StyleSheet.create({
  save:{
    backgroundColor:"green",
    top:190,
  },
  sel:{
    margin:8,
  },
  div:{
    top:322,
    left:90,
  },
  campos:{
    top:165,
  
  }
})
export default Login;