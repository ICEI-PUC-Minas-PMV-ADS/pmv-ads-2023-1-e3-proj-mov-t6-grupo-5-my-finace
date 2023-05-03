import React, {useState} from 'react';
import { Button, RadioButton, Text } from 'react-native-paper';
import Input from "../componentes/Input";
import {View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Cb from "../componentes/Cb";

function RegistroMetas () {
    const navigation = useNavigation();
    const [tituloMeta, setTituloMeta] = React.useState();
    const [valorMeta, setValorMeta] = React.useState();
    const [descricaoMeta, setDescricaoMeta] = React.useState();
    const [pouparMes, setPouparMes] = React.useState();

    async function salvar(){
        const meta = {
            tituloMeta: tituloMeta,
            valorMeta: valorMeta,
            descricaoMeta: descricaoMeta,
            pouparMes: pouparMes
        }
        await adicionarMeta(meta)
        navigation.goBack();
    }


    return (
        <View>
        <Cb title="Cadastro de Metas" goBack={()=>navigation.goBack()}/>
        <View>
            <Input
                label="Titulo da Meta"
                value={tituloMeta}
                placeholder=""
                onChangeText={tituloMeta => setTituloMeta(tituloMeta)}
            />
            <Input
                label="Valor da sua Meta"
                value={valorMeta}
                placeholder="R$0,00"
                keyboardType="decimal-pad"
                onChangeText={valorMeta => setValorMeta(valorMeta)}
            />
            <Input
                label="Descrição da Meta"
                value={descricaoMeta}
                placeholder=""
                onChangeText={descricaoMeta => setDescricaoMeta(descricaoMeta)}
            />
            <Input
                label="Valor a ser Poupado por Mês"
                value={pouparMes}
                placeholder="R$0,00"
                keyboardType="decimal-pad"
                onChangeText={pouparMes => setPouparMes(pouparMes)}
            />
            </View>

            <Button style={styles.save} mode='cotained' onPress={()=>{salvar()}}>
                <Text style={styles.text}>Cadastrar Meta</Text>
            </Button>
        </View>
    );
    

}

const styles = StyleSheet.create({
    save: {
        backgroundColor: '#00BFFF',
        width: 300,
        height: 50,

    },
})

export default RegistroMetas;



