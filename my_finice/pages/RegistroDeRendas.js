import React, {useState} from 'react';
import { Appbar, Text, TextInput, DataTable } from 'react-native-paper';
import Input from "../componentes/Input";
import {View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
import Cb from "../componentes/Cb";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const RegistroDeRendas = () => {

    return (

      <SafeAreaProvider>
        <View>
        <Cb title="Registro de Rendas" goBack={()=>navigation.goBack()}/>
        <Input
                label="Tipo de renda"
                placeholder=""
              />
                <Input
                label="Valor"
                placeholder="R$0,00"
                keyboardType="decimal-pad"
            
              />
                <Input
                label="Destinação"
                placeholder=""
              />
              <Input
                label='Data'
                placeholder=''
              />

        </View>

  </SafeAreaProvider>
    );


}

export default RegistroDeRendas;