import React from "react";
import Home from "../pages/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Cadastrodespesas from "../pages/Cadastrodespesas";
import EvolucaoDespesas from "../pages/EvolucaoDespesas";
import RegistroDeRendas from "../pages/RegistroDeRendas";
import DetalhesRendas from "../pages/DetalhesRendas";
import VisualizacaoRendas from "../pages/VisualizacaoRendas";
import EditarRendas from "../pages/EditarRendas";
import EditarDespesas from "../pages/EditarDespesas";
import VisualizacaoMetas from "../pages/Metas/VisualizacaoMetas";
import RegistroMetas from "../pages/Metas/RegistroMetas";
import EditarMetas from "../pages/Metas/EditarMetas";
import TelaLogin from "../pages/TelaLogin";
import TelaCadastro from "../pages/TelaCadastro";
const Stack  = createNativeStackNavigator();
const Main =() =>{
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
            <Stack.Screen
                    name="TelaLogin"
                    component={TelaLogin}
                    options={{
                        header: ()=>null,
                        }
                    }
                />
                 <Stack.Screen
                    name="TelaCadastro"
                    component={TelaCadastro}
                    options={{
                        header: ()=>null,
                        }
                    }
                />
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
                <Stack.Screen
                name='DetalhesRendas'
                component={DetalhesRendas}
                options={{
                    header: ()=>null,
                        }
                    }
                />
                <Stack.Screen
                    name='EditarRendas'
                    component={EditarRendas}
                    options={{
                        header: ()=>null,
                        }
                    }
                />
                 <Stack.Screen
                    name='EditarDespesas'
                    component={EditarDespesas}
                    options={{
                        header: ()=>null,
                        }
                    }
                />
                <Stack.Screen
                    name='Metas'
                    component={VisualizacaoMetas}
                    options={{
                        header: ()=>null,
                        }
                    }
                />
                <Stack.Screen
                    name='RegistroMetas'
                    component={RegistroMetas}
                    options={{
                        header: ()=>null,
                        }
                    }
                />
                <Stack.Screen
                    name='EditarMetas'
                    component={EditarMetas}
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