import { StyleSheet, View,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Botaoflutuante  from '../componentes/Botaoflutuante';
import Cb from '../componentes/Cb';
import Icon from 'react-native-vector-icons/MaterialIcons'
function MyStack() {
  const navigation = useNavigation();
  return (
    <View>
      <Cb title="Visualização das despesas"/>
      <Text style={aviso.av}>Não temos registro no momento</Text>
      <Botaoflutuante
      onPress={() => navigation.navigate('Cadastrodespesas')}
      />
     
    </View>
  );
}
const aviso = StyleSheet.create({
    av:{
      left:60,
      top:200,
      fontSize:20
    }
})
export default MyStack;