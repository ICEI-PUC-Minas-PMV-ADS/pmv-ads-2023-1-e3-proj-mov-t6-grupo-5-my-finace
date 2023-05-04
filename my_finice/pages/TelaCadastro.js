import React, {useEffect, useState} from 'react';
import { Button, RadioButton, Text } from 'react-native-paper';
import Input from "../componentes/Input";
import {View, StyleSheet} from 'react-native';
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
                <Cb title="Registro de Rendas" onPress={()=>navigation.goBack()}/>
          <View>
                <Input
                label="username"
                value={username}
                placeholder=""
                onChangeText={username => setUsername(username)}
              />
                <Input
                label="E-mail"
                value={email}
                placeholder=""
                onChangeText={email => setEmail(email)}
              />
                <Input
                label="Senha"
                value={senha}
                placeholder=""
                onChangeText={senha => setPassword(senha)}
              />
            
          </View>

                <Button style={style.save} mode="contained" onPress={()=>{criarcadastro()}}>
                  ENTRAR  
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
export default Login;