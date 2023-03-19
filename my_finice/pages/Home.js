import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Cadastrodespesas from './Cadastrodespesas';
import  test  from './test';

const Home = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
      { key: 'T', title: 't', focusedIcon: 'heart'},
      { key: 'cadastro', title: 'cadastrar despesas', focusedIcon: 'heart',color:'green'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    T:test,
    cadastro: Cadastrodespesas,
  });

  return (
    <SafeAreaProvider>
    <BottomNavigation
      color = "green"
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    </SafeAreaProvider>
  );
};

export default Home;