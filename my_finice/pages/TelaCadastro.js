import React, { useEffect, useState } from 'react';
import { Button, RadioButton, Text } from 'react-native-paper';
import Input from "../componentes/Input";
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Cb from "../componentes/Cb";
import { criartabela, cadastrar } from '../Services/LoginDB'


function Login() {
  const navigation = useNavigation()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fone, setFone] = useState(0);
  const [senha, setPassword] = useState('');

  useEffect(() => {
    criartabela()
  })

  async function criarcadastro() {
    const dados = {
      username: username,
      email: email,
      senha: senha,
      fone: fone,
    }

    await cadastrar(dados);
    navigation.navigate('TelaLogin');
  }

  return (
    <View>
      <Cb title="" onPress={() => navigation.goBack()} />

      <View style={style.titulo}>
        <Text style={style.texto01}>CADASTRE-SE</Text>
        <Text style={style.texto02}>É fácil e rápido!</Text>
      </View>

      <View style={style.campos}>
        <Input
          label="Username"
          value={username}
          placeholder=""
          onChangeText={username => setUsername(username)}
        />
        <Input
          label="Fone"
          placeholder=''
          onChange={fone => setFone(fone)}
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
          secureTextEntry={true}
        />
        <Input
          label="Confirm your password"
          secureTextEntry={true}
        />

      </View>
      <Button style={style.save} mode="contained" onPress={() => { criarcadastro() }}>
        CADASTRA-SE
      </Button>
    </View>

  );
}

const style = StyleSheet.create({
  titulo: {
    top: 80,
  },
  texto01: {
    fontStyle: "impact",
    fontSize: 52,
    textAlign: "center",
    color: "green",
  },
  texto02: {
    fontStyle: "italic",
    textAlign: "center",
  },
  campos: {
    top: 110,
  },
  save: {
    backgroundColor: "green",
    top: 190,
  },
  sel: {
    margin: 8,
  },
  div: {
    top: 300,
    left: 90,
  }
})
export default Login;
