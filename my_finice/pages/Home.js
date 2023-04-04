import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Cadastrodespesas from './Cadastrodespesas';
import  VisualizacaoDespesa  from './VisualizacaoDespesa';
import EvolucaoDespesas from './EvolucaoDespesas';
import RegistroDeRendas from './RegistroDeRendas';
import VisualizacaoRendas from './VisualizacaoRendas';

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'T', title: 'Gastos', focusedIcon: 'credit-card-outline'},
    { key: 'Evolucao', title: 'Evolução das desepsas', focusedIcon: 'chart-bar'},
    { key: 'Rendas', title: 'Visualização de Rendas', focusedIcon: 'database-arrow-up-outline'}
    
  ]);

  const renderScene = BottomNavigation.SceneMap({
    T:VisualizacaoDespesa,
    Evolucao:EvolucaoDespesas,
    cadastro: Cadastrodespesas,
    Rendas: VisualizacaoRendas,
  });

  return (
    <SafeAreaProvider>
    <BottomNavigation
      color = "green"
      navigationState={{ index, routes }}
      activeColor='green'
      inactiveColor='#000'
      onIndexChange={setIndex}
       renderScene={renderScene}
       barStyle={{ backgroundColor: '#fff' }}
  />
    </SafeAreaProvider>
  );
};

export default Home;