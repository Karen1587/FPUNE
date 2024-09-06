
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ComponenteParcial01 = () => {
  const [nombre, setNombre] = useState('');
  const navigation = useNavigation();
  
  const items = [
    { id: '1', title: 'PropsParcial02' },
    { id: '2', title: 'AxiosParcial03' },
    { id: '3', title: 'AsyncStorageParcial04' },
  ];

  const handleNavigate = (item) => {
    if (item.id === '1') {
      navigation.navigate('PropsParcial02', { nombre, estado: false });
    } else if (item.id === '2') {
      navigation.navigate('AxiosParcial03');
    } else if (item.id === '3') {
      navigation.navigate('AsyncStorageParcial04');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Examen Primera Parcial</Text>
      
      <Image 
  source={require('../assets/gati.jpg')}  
  style={styles.logo}
/>

      
      <TextInput
        placeholder="Ingresar nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />
      
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleNavigate(item)}>
            <Text style={styles.item}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20  ,backgroundColor: '#FF6F91'},
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  logo: { width: 100, height: 100, alignSelf: 'center', marginVertical: 20 },
  input: { borderColor: '#ccc', borderWidth: 1, padding: 10, marginBottom: 20 },
  item: { padding: 15, fontSize: 18, borderBottomWidth: 1, borderColor: '#ddd' },
});

export default ComponenteParcial01;
