import { Button, View,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Botaoflutuante  from '../componentes/Botaoflutuante';
import Cb from '../componentes/Cb';
function MyStack() {
  const navigation = useNavigation();
  return (
    <View>
      <Cb title="Visualização das despesas"/>
      <Text>Não temos registro no momento</Text>
      <Botaoflutuante
      onPress={() => navigation.navigate('Cadastrodespesas')}
      />
    </View>
  );
}

export default MyStack;