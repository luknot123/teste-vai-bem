import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Panel from './components/Panel/Panel';
import Cadastrar from './components/Cadastrar/Cadastrar';
import Buscar from './components/Buscar/Buscar';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Root } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();


const App: () => React$Node = () => {

  let token = AsyncStorage.getItem('@AuthApp:token');

  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      {/* <SafeAreaView> */}
      <Root>
        <NavigationContainer>
        {token != null ? (
           <Stack.Navigator initialRouteName="Panel">
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
              />
              <Stack.Screen name="Panel" component={Panel} 
                options={{title: 'Painel',headerShown: false}} />
              <Stack.Screen name="Buscar" component={Buscar} 
                options={{title: 'Buscar Estabelecimento',headerShown: true}} />
              <Stack.Screen name="Cadastrar" component={Cadastrar} 
                options={{title: 'Cadastrar Estabelecimento',headerShown: true}} />                
          </Stack.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="Login">
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
              />
              <Stack.Screen name="Panel" component={Panel} 
                options={{title: 'Painel',headerShown: false}} />
              <Stack.Screen name="Buscar" component={Buscar} 
                options={{title: 'Buscar Estabelecimento',headerShown: true}} />
              <Stack.Screen name="Cadastrar" component={Cadastrar} 
                options={{title: 'Cadastrar Estabelecimento',headerShown: true}} />                
          </Stack.Navigator>
        )}
        </NavigationContainer>
      </Root>
      {/* </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;