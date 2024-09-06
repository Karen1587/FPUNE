import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageParcial04 = () => {
  const [codigo, setCodigo] = useState('');
  const [materia, setMateria] = useState('');
  const [calificaciones, setCalificaciones] = useState('');
  const [data, setData] = useState([]);

  const saveData = async () => {
    const newData = { codigo, materia, calificaciones };
    const storedData = await AsyncStorage.getItem('datos');
    const parsedData = storedData ? JSON.parse(storedData) : [];
    parsedData.push(newData);
    await AsyncStorage.setItem('datos', JSON.stringify(parsedData));
    setData(parsedData);
    setCodigo('');
    setMateria('');
    setCalificaciones('');
  };

  const loadData = async () => {
    const storedData = await AsyncStorage.getItem('datos');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
        style={styles.input}
        placeholderTextColor="gray" 
      />
      <TextInput
        placeholder="Materia"
        value={materia}
        onChangeText={setMateria}
        style={styles.input}
        placeholderTextColor="gray" 
      />
      <TextInput
        placeholder="Calificaciones"
        value={calificaciones}
        onChangeText={setCalificaciones}
        style={styles.input}
        placeholderTextColor="gray" 
      />
      <Button title="Guardar" onPress={saveData} color="#A47CBE" />
      
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.codigo} - {item.materia} - {item.calificaciones}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#E6D8E2' },
  input: { 
    borderColor: '#ccc', 
    borderWidth: 1, 
    padding: 10, 
    marginBottom: 10,
    color: 'black'  
  },
  item: { 
    padding: 10, 
    borderBottomWidth: 1, 
    borderColor: '#ddd' 
  },
  

  text: { 
    color: 'black'  
  }});

export default AsyncStorageParcial04;
