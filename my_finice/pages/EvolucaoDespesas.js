import { StyleSheet, View,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Botaoflutuante  from '../componentes/Botaoflutuante';
import Cb from '../componentes/Cb';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
function EvolucaoDespesas() {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider>
    <View>
      <Cb title="Evolução das desepesas"/>
      <Text style={aviso.av}>Não temos registro no momento</Text>
    </View>
    </SafeAreaProvider>
  );
}
const aviso = StyleSheet.create({
    av:{
      left:60,
      top:200,
      fontSize:20
    }
})
export default EvolucaoDespesas;