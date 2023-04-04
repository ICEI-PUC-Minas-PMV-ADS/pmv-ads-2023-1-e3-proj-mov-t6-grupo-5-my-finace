import React, {useState} from 'react';
import { Appbar, Text, TextInput } from 'react-native-paper';
import Input from "../componentes/Input";
import {View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";

const RegistroDeRendas = () => {
    const navigation = useNavigation();

    return (

        <View>

        <Appbar.Header>
      <Appbar.Content title="Registro de Rendas" />
        </Appbar.Header>

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
                label="Data"
                placeholder=""
              />

        </View>

    );


}

export default RegistroDeRendas;