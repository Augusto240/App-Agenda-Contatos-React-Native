import React, { createContext, useState, useEffect, useContext } from 'react';
import Storage from 'expo-storage';

export interface Contact {
  id: string;
  nome: string;
  telefone: string;
  email: string;
  aniversario: string;
  favorito: boolean;
}

interface ContactsContextData {
  contacts: Contact[];
  addContact: (contact: Omit<Contact, 'id'>) => Promise<boolean>;
  toggleFavorite: (id: string) => void;
  deleteContact: (id: string) => void;
}

const ContactsContext = createContext<ContactsContextData>({} as ContactsContextData);

export const ContactsProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const loadContacts = async () => {
      const storedContacts = await Storage.getItem({ key: 'contacts' });
      if (storedContacts) {
        setContacts(JSON.parse(storedContacts));
      }
    };
    loadContacts();
  }, []);

  useEffect(() => {
    Storage.setItem({ key: 'contacts', value: JSON.stringify(contacts) });
  }, [contacts]);

  const addContact = async (contact: Omit<Contact, 'id'>): Promise<boolean> => {
    if (contacts.some(c => c.email.toLowerCase() === contact.email.toLowerCase())) {
      alert('Este email já foi cadastrado.');
      return false; 
    }

    const newContact: Contact = {
      id: String(new Date().getTime()), 
      ...contact,
    };
    setContacts(prevContacts => [...prevContacts, newContact]);
    return true; 
  };
  
  const toggleFavorite = (id: string) => {
    setContacts(contacts.map(c =>
      c.id === id ? { ...c, favorito: !c.favorito } : c
    ));
  };
  
  const deleteContact = (id: string) => {
    setContacts(contacts.filter(c => c.id !== id));
  };
  
  return (
    <ContactsContext.Provider value={{ contacts, addContact, toggleFavorite, deleteContact }}>
      {children}
    </ContactsContext.Provider>
  );
};

export function useContacts() {
  return useContext(ContactsContext);
}