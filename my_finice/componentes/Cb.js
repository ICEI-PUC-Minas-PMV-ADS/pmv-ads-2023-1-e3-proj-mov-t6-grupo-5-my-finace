
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
const Cb = () => (
  
    <Appbar.Header mode='center-aligned'>
      <Appbar.Action icon="keyboard-backspace"/>
      <Appbar.Content color="green" title="CADASTRO DE DEPESAS" />
    </Appbar.Header>
  );

  const estilo = StyleSheet.create({
      cabecalho:{
      backgroundColor:"green"
      }
  })
export default Cb;