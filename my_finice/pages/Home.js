import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Cadastrodespesas from './Cadastrodespesas';
import  VisualizacaoDespesa  from './VisualizacaoDespesa';

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'T', title: 'Gastos', focusedIcon: 'credit-card-outline'},
    
  ]);

  const renderScene = BottomNavigation.SceneMap({
    T:VisualizacaoDespesa,
    cadastro: Cadastrodespesas,
  });

  return (
    <SafeAreaProvider>
    <BottomNavigation
      color = "green"
      navigationState={{ index, routes }}
      activeColor='green'
      inactiveColor='green'
      onIndexChange={setIndex}
       renderScene={renderScene}
       barStyle={{ backgroundColor: '#fff' }}
  />
    </SafeAreaProvider>
  );
};

export default Home;