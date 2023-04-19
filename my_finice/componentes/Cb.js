
import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation,useIsFocused } from '@react-navigation/native';
import { IconButton, MD3Colors } from 'react-native-paper';
import{List} from 'react-native-paper';
//const navigation = useNavigation();
const Cb = (props) => (
  <Appbar.Header >
          <IconButton
        icon="keyboard-backspace"
        iconColor={'green'}
        size={20}
        {...props}
      />
      <Appbar.Action {...props}/>
      <Appbar.Content color="green" {...props} />
    </Appbar.Header>
  );

  const estilo = StyleSheet.create({
      cabecalho:{
      backgroundColor:"green",
      left:500
      }
  })
export default Cb;