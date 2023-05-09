import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Cadastrodespesas from './Cadastrodespesas';
import  VisualizacaoDespesa  from './VisualizacaoDespesa';
import EvolucaoDespesas from './EvolucaoDespesas';
import RegistroDeRendas from './RegistroDeRendas';
import VisualizacaoRendas from './VisualizacaoRendas';
import Metas from './Metas/VisualizacaoMetas';
import DetalhesRendas from './DetalhesRendas';
import RegistroMetas from './Metas/RegistroMetas';

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'T', title: '', focusedIcon: 'credit-card-outline',color:'#3F51B5' },
    { key: 'Evolucao', title: '', focusedIcon: 'equalizer'},
    { key: 'Rendas', title: '', focusedIcon: 'database-arrow-up-outline'},
    { key: 'Metas', title: '', focusedIcon: 'rocket-launch'},
    { key: 'DetalhesRendas', title: '', focusedIcon: 'clipboard-text-outline'}
  ]);

  const renderScene = BottomNavigation.SceneMap({
    T:VisualizacaoDespesa,
    Evolucao:EvolucaoDespesas,
    cadastro: Cadastrodespesas,
    Registro: RegistroDeRendas,
    Rendas: VisualizacaoRendas,
    RegistroMetas:RegistroMetas,
    Metas: Metas,
    DetalhesRendas: DetalhesRendas,
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