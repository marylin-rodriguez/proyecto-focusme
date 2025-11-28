import AsyncStorage from '@react-native-async-storage/async-storage';

export const guardarDato = async (clave, valor) => {
  try {
    await AsyncStorage.setItem(clave, JSON.stringify(valor));
  } catch (error) {
    console.log("Error guardando:", error);
  }
};

export const leerDato = async (clave) => {
  try {
    const value = await AsyncStorage.getItem(clave);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.log("Error leyendo:", error);
    return null;
  }
};
