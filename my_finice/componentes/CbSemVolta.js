
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation,useIsFocused } from '@react-navigation/native';
const Cb = (props,{goBack}) => (

  <Appbar.Header mode='center-aligned'>
      <Appbar.Action {...props}/>
      <Appbar.Content color="green" {...props} />
    </Appbar.Header>
  );

  const estilo = StyleSheet.create({
      cabecalho:{
      backgroundColor:"green"
      }
  })
export default Cb;