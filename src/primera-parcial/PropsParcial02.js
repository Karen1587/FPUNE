
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PropsParcial02 = ({ route }) => {
  const { nombre, estado } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Mi nombre es: {nombre}, actualmente estoy {estado ? 'ACTIVO' : 'INACTIVO'} en el 8º semestre.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor: '#FFC0CB' },
  text: { fontSize: 20, textAlign: 'center', color:'black' },
});

export default PropsParcial02;
