import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login1';
import InicioScreen from './screens/Inicio.Screens';
import DetalleScreen from './screens/Detalle.Screens';
import AjustesScreen from './screens/Ajuste.Screens';



export default function App() {
  return (
    <InicioScreen/>
  );
}

