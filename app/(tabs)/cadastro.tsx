import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch, Alert, ScrollView } from 'react-native';
import { useContacts } from '../ContactsContext';

export default function CadastroScreen() {
  const { addContact } = useContacts(); 

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [aniversario, setAniversario] = useState('');
  const [isFavorito, setIsFavorito] = useState(false);

  const handleSalvar = async () => {
    if (!nome || !email) {
      Alert.alert('Erro', 'Nome e Email são obrigatórios.');
      return;
    }

    const sucesso = await addContact({
      nome,
      telefone,
      email,
      aniversario,
      favorito: isFavorito,
    });

    if (sucesso) {
      Alert.alert('Sucesso', 'Contato salvo!');
      setNome('');
      setTelefone('');
      setEmail('');
      setAniversario('');
      setIsFavorito(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Nome Completo</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="João da Silva" />
      
      <Text style={styles.label}>Telefone</Text>
      <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} placeholder="(99) 99999-9999" keyboardType="phone-pad" />
      
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="joao@email.com" keyboardType="email-address" autoCapitalize="none" />
      
      <Text style={styles.label}>Data de Aniversário</Text>
      <TextInput style={styles.input} value={aniversario} onChangeText={setAniversario} placeholder="DD/MM/AAAA" />
      
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Marcar como Favorito?</Text>
        <Switch value={isFavorito} onValueChange={setIsFavorito} />
      </View>

      <Button title="Salvar Contato" onPress={handleSalvar} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  label: { fontSize: 16, marginBottom: 5 },
  input: { height: 40, backgroundColor: '#fff', borderColor: '#ccc', borderWidth: 1, borderRadius: 5, marginBottom: 15, paddingHorizontal: 10 },
  switchContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
});