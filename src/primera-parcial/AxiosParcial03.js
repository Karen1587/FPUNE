
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

const AxiosParcial03 = () => {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => setComments(response.data))
      .catch(error => console.error(error));
  }, []);

  const filteredComments = comments.filter(comment =>
    comment.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar por correo"
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />
      
      <FlatList
        data={filteredComments}
        renderItem={({ item }) => <Text style={styles.item}>{item.email}</Text>}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#E6E6FA' },
  input: { borderColor: '#ccc', borderWidth: 1, padding: 10, marginBottom: 20,backgroundColor: '#E6D8E2'  },
  item: { padding: 10, borderBottomWidth: 1, borderColor: '#ddd',color: 'black'  },
});

export default AxiosParcial03;
