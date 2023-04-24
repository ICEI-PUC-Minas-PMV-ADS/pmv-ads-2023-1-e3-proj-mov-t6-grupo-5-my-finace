import * as React from 'react';
import { StyleSheet} from 'react-native';
import { Dialog, Portal, Text,Button,Provider} from 'react-native-paper';
import {recuperandoDespesasEspecifica,deleteDespesas,atualizarDespesas} from "../Services/Despesasdb"

const MyComponent = () => {
    const [visible, setVisible] = React.useState(false);
  
    const hideDialog = () => setVisible(false);
  
    return (
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Actions>
            <Button onPress={() => console.log('Cancel')}>Cancel</Button>
            <Button onPress={() => deleteDespesas()}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  };
export default MyComponent;