import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Main from './Navegação/main';
import TelaLogin from './pages/TelaLogin'

const App =()=>{
    return(
        <NavigationContainer>
            <Main/>
        </NavigationContainer>
    )
}

export default App;