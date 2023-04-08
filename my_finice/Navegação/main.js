import React from "react";
import Home from "../pages/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Cadastrodespesas from "../pages/Cadastrodespesas";
import EvolucaoDespesas from "../pages/EvolucaoDespesas";
import RegistroDeRendas from "../pages/RegistroDeRendas";
import VisualizacaoRendas from "../pages/VisualizacaoRendas";

const Stack  = createNativeStackNavigator();
const Main =() =>{
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        header: ()=>null,
                        }
                    }
                />

            <Stack.Screen
                    name='Cadastrodespesas'
                    component={Cadastrodespesas}
                    options={{
                        header: ()=>null,
                        }
                    }
                />
                <Stack.Screen
                    name='EvolucaoDespesas'
                    component={EvolucaoDespesas}
                    options={{
                        header: ()=>null,
                        }
                    }
                />
                <Stack.Screen
                    name='RegistroDeRendas'
                    component={RegistroDeRendas}
                    options={{
                        header: ()=>null,
                        }
                    }
                />
                <Stack.Screen
                    name='VisualizaçãoRendas'
                    component={VisualizacaoRendas}
                    options={{
                        header: ()=>null,
                        }
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
        );
}

export default Main;