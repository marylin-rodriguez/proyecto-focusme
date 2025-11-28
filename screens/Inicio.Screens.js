import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Titulo from '../components/Titulo';
import { guardarDato, leerDato } from '../utils/storage';

export default function InicioScreen({ navigation }) {

  const [texto, setTexto] = useState('');
  const [guardado, setGuardado] = useState('');

  useEffect(() => {
    cargarTexto();
  }, []);

  const cargarTexto = async () => {
    const valor = await leerDato('miTexto');
    if (valor) setGuardado(valor);
  };

  const guardarTexto = async () => {
    await guardarDato('miTexto', texto);
    setGuardado(texto);
  };

  return (
    <View style={styles.container}>
      <Titulo>Pantalla Inicio</Titulo>

      <Text>Texto guardado: {guardado}</Text>

      <TextInput
        placeholder="Escribe algo para guardar"
        style={styles.input}
        onChangeText={setTexto}
        value={texto}
      />

      <Button title="Guardar en AsyncStorage" onPress={guardarTexto} />

      <View style={{ marginTop: 20 }}>
        <Button
          title="Ir a Detalle"
          onPress={() =>
            navigation.navigate('Detalle', { mensaje: 'Hola desde Inicio' })
          }
        />
      </View>

      <View style={{ marginTop: 10 }}>
        <Button
          title="Ir a Ajustes"
          onPress={() => navigation.navigate('Ajustes')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
});
