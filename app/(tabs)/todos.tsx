import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useContacts, Contact } from '../ContactsContext';

const ContatoItem = ({ item, onToggleFavorite, onDelete }: { item: Contact, onToggleFavorite: (id: string) => void, onDelete: (id: string) => void }) => (
  <View style={styles.itemContainer}>
    <View style={styles.info}>
      <Text style={styles.nome}>{item.nome}</Text>
      <Text>{item.telefone}</Text>
      <Text>{item.email}</Text>
    </View>
    <View style={styles.botoes}>
      <TouchableOpacity onPress={() => onToggleFavorite(item.id)}>
        <FontAwesome name={item.favorito ? 'star' : 'star-o'} size={24} color={item.favorito ? '#FFD700' : 'gray'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(item.id)} style={{ marginLeft: 15 }}>
         <FontAwesome name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  </View>
);

export default function TodosContatosScreen() {
  const { contacts, toggleFavorite, deleteContact } = useContacts();

  const handleDelete = (id: string) => {
    Alert.alert("Confirmar Exclusão", "Tem certeza que deseja apagar este contato?", [
      { text: "Cancelar" },
      { text: "Apagar", onPress: () => deleteContact(id), style: 'destructive' }
    ]);
  };
  
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => <ContatoItem item={item} onToggleFavorite={toggleFavorite} onDelete={handleDelete} />}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum contato cadastrado.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  itemContainer: { flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  info: { flex: 1 },
  nome: { fontSize: 18, fontWeight: 'bold' },
  botoes: { flexDirection: 'row', alignItems: 'center' },
  emptyText: { textAlign: 'center', marginTop: 50, fontSize: 18, color: 'gray' },
});