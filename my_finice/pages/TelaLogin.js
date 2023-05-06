import React, {useState} from 'react';
import { Button, RadioButton, Text } from 'react-native-paper';
import Input from "../componentes/Input";
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Cb from "../componentes/Cb";
import { validarlogin } from '../Services/LoginDB';

function Login() {
const navigation = useNavigation()
const[email, setEmail] = useState () 
const[senha, setPassword] = useState () 

async function recuperarcadastro () {
  const dados = {
    email: email,
    senha: senha
    
  }

const result = await validarlogin(dados)
  if(result == 'Validado com sucesso'){
    navigation.navigate('Home')
  }

}

  return(
    
      
          <View>
              
          <View style={style.campos}>
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
            
                <Button style={style.save} mode="contained" onPress={() =>recuperarcadastro()} >
                  ENTRAR  
                </Button>
              </View>

                
                <TouchableOpacity style={style.div} onPress={() => navigation.navigate('TelaCadastro')} >
                        <Text>Ainda não possui uma conta?</Text>
                    </TouchableOpacity>
           
            </View>

  );
}

const style = StyleSheet.create({
  save:{
    backgroundColor:"green",
    top:30,
  },
  sel:{
    margin:8,
  },
  div:{
    top:322,
    left:90,
  },
  campos:{
    top:262,
  
  }
})


export default Login;