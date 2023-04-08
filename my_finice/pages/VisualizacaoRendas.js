import React, {useState} from 'react';
import { Appbar, Text, TextInput, Surface, ProgressBar, MD3Colors } from 'react-native-paper';
import Botaoflutuante  from '../componentes/Botaoflutuante';
import Input from "../componentes/Input";
import {View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
import Cb from "../componentes/Cb";


const VisualizacaoRendas = () => {

    const navigation = useNavigation();

    return (

        <View>
    
        <Cb title="Visualização de Rendas"/>

        <Botaoflutuante
      onPress={() => navigation.navigate('RegistroDeRendas')}
      />

      <Text style={styles.tt}>Saldo em conta</Text>

    <Surface style={styles.surface} elevation={4}>
        <Text style={styles.sd}>0,00</Text>
    </Surface>

    <Text style={styles.dest}>Destinação dos Ganhos</Text>

    <ProgressBar style={styles.iv} progress={0.7} color={MD3Colors.primary60} /><Text style={styles.texto}>Investimentos</Text>
    <ProgressBar style={styles.df} progress={0.5} color={MD3Colors.primary60} /><Text style={styles.texto}>Despesa Fixa</Text>
    <ProgressBar style={styles.poup} progress={0.3} color={MD3Colors.primary60} /><Text style={styles.texto}>Poupança</Text>
    <ProgressBar style={styles.out} progress={0.2} color={MD3Colors.primary60} /><Text style={styles.texto}>Outros</Text>

    <Text style={styles.textodois}>Crédito Disponível</Text>

    <Surface style={styles.surfacedois} elevation={4}>
        <Text style={styles.sd}>0,00</Text>
    </Surface>

        </View>

    );


}
const styles = StyleSheet.create({
    sd:{
      marginLeft: 8,
      fontSize:45,
    },
    surface:{
        padding: 0,
        marginTop: 15,
        marginLeft:12,
        height: 80,
        width: 370,
        justifyContent: 'center',
      },
      tt:{
        marginLeft: 12,
        marginTop: 15,
      },
      dest:{
        marginLeft: 12,
        marginTop: 40,
      },
      iv:{
        width: 230,
        marginTop: 15,
        marginLeft: 12,
        marginBottom: 20,
      },
      df:{
        width: 230,
        marginTop: 15,
        marginLeft: 12,
        marginBottom: 20,
      },
      poup:{
        width: 230,
        marginTop: 15,
        marginLeft: 12,
        marginBottom: 20,
      },
      out:{
        width: 230,
        marginTop: 15,
        marginLeft: 12,
        marginBottom: 20,
      },
      texto:{
        textAlign:"right",
        marginEnd: 10,
        marginTop: -30,
      },
      textodois:{
        marginLeft: 12,
        marginTop: 40,
      },
      surfacedois:{
        padding: 0,
        marginTop: 15,
        marginLeft:12,
        height: 80,
        width: 370,
        justifyContent: 'center',
      },
})

export default VisualizacaoRendas;