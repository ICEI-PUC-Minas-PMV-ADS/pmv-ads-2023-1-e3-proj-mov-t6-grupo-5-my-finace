import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const Botaoflutuante = (prop) => (
  <FAB
    icon="plus"
    color='#fff'
    style={styles.fab}
    {...prop}
   
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 50,
    top:600,
    backgroundColor:"green"
  },
})

export default Botaoflutuante;