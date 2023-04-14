import React, {useState} from 'react';
import { Appbar, Text, TextInput, Surface, ProgressBar, MD3Colors } from 'react-native-paper';
import Botaoflutuante  from '../componentes/Botaoflutuante';
import Input from "../componentes/Input";
import {View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
import Cb from "../componentes/Cb";

const Metas = () => {
    const navigation = useNavigation();

    return (
        <View>

        <Cb title="Metas"/>

        <Botaoflutuante
        positon="end"
        align="center"
        onPress={() => navigation.navigate('RegistroMetas')}
        />

        <Surface style={styles.surface} elevation={8}>
            <Text style={styles.titulo}>Compra de Carro Novo</Text>
            <Text style={styles.descricao}>Comprar uma Fiorinho</Text>
            <Text style={styles.porcent}>48% da Meta Completa</Text>
            <ProgressBar style={styles.progress} progress={0.48} color={MD3Colors.primary60} />
        </Surface>

        <Surface style={styles.surface} elevation={8}>
            <Text style={styles.titulo}>Compra de Novo Notebook</Text>
            <Text style={styles.descricao}>Comprar um Notebook Gamer</Text>
            <Text style={styles.porcent}>22% da Meta Completa</Text>
            <ProgressBar style={styles.progress} progress={0.22} color={MD3Colors.primary60} />
        </Surface>

        <Surface style={styles.surface} elevation={4}>
            <Text style={styles.titutlo}>Total Economizado</Text>
            <Text style={styles.descricao}>R$ 40.000,00</Text>
        </Surface>
    
        </View>
    );
}

const styles = StyleSheet.create({
    surface:{
        padding: 0,
        marginTop: 15,
        marginLeft:12,
        height: 150,
        width: 370,
        justifyContent: 'center',
    },

    titulo:{
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 25,
        textDecorationStyle: 'solid',
    },

    descricao:{
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 15,
        color: '#8585ad'
    },

    porcent:{
        justifyContent: 'end',
        alignContent: 'end',
        fontSize: 15,
        color: '#8585ad'
    },

    progress:{
        marginTop: 10,
        marginStart: 5,
        marginEnd: 5,
        color: '#ac00e6'
    }
})

export default Metas;