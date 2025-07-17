import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { ContactsProvider } from '../ContactsContext';

export default function TabLayout() {
  return (
    <ContactsProvider>
      <Tabs>
        <Tabs.Screen
          name="cadastro"
          options={{
            title: 'Cadastrar',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus" color={color} />,
          }}
        />
        <Tabs.Screen
          name="todos" 
          options={{
            title: 'Todos os Contatos',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="users" color={color} />,
          }}
        />
        <Tabs.Screen
          options={{
            title: 'Favoritos',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="star" color={color} />,
          }}
        />
      </Tabs>
    </ContactsProvider>
  );
}