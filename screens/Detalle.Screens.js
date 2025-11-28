import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Titulo from '../components/Titulo';

export default function DetalleScreen({ route }) {
  const { mensaje } = route.params;

  return (
    <View style={styles.container}>
      <Titulo>Pantalla Detalle</Titulo>
      <Text style={styles.texto}>Mensaje recibido: {mensaje}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  texto: {
    fontSize: 18,
    marginTop: 10,
  },
});
