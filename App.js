import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaCadastro from './Telas/TelaCadastro';
import TelaProdutos from './Telas/TelaProdutos';

//Constante para chamar o createStackNavigarion para navegar entre telas.
const Stack = createStackNavigator();

export default function App() {
  return (
    //Aqui é onde eu declarar minhas telas para todo o app e também posso fazer algumas pequenas configurações.
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Cadastro"
        component={TelaCadastro}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Produtos"
        component={TelaProdutos}
    />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
