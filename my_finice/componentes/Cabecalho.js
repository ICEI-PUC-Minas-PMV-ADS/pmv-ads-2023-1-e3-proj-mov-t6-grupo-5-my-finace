
import * as React from 'react';
import { Appbar } from 'react-native-paper';
const Cabecalho = () => (
  <Appbar.Header>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content title="Title" />
    <Appbar.Action icon="calendar" onPress={() => {}} />
    <Appbar.Action icon="magnify" onPress={() => {}} />
  </Appbar.Header>
);
export default Cabecalho;