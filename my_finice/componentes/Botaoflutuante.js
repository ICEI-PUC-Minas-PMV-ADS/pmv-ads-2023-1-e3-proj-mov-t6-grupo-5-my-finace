import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const Botaoflutuante = (prop) => (
  <FAB
    icon="plus"
    style={styles.fab}
    {...prop}
   
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default Botaoflutuante;