import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Titulo from '../components/Titulo';
import { leerDato } from '../utils/storage';

export default function AjustesScreen() {

  const [dato, setDato] = useState('');

  useEffect(() => {
    obtenerDato();
  }, []);

  const obtenerDato = async () => {
    const valor = await leerDato('miTexto');
    setDato(valor || 'No hay datos guardados');
  };

  return (
    <View style={styles.container}>
      <Titulo>Ajustes</Titulo>

      <Text style={styles.texto}>Dato guardado en AsyncStorage:</Text>
      <Text style={styles.valor}>{dato}</Text>

      <Button title="Actualizar dato" onPress={obtenerDato} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  texto: { fontSize: 18 },
  valor: {
    fontSize: 20,
    marginVertical: 15,
    fontWeight: 'bold'
  },
});
