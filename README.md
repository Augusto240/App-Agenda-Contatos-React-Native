# 📒 App Agenda de Contatos

Este é um projeto de estudo simples, desenvolvido em **React Native com Expo**, que simula uma agenda de contatos completa e funcional. O objetivo foi aplicar conceitos fundamentais do desenvolvimento mobile.

O aplicativo permite ao usuário cadastrar, listar, favoritar e deletar contatos, com todos os dados salvos localmente no dispositivo.

---

### ✅ Funcionalidades Implementadas

* **Navegação por Abas:** O app possui três telas principais:
    * **Cadastrar:** Formulário para adicionar novos contatos.
    * **Todos os Contatos:** Lista todos os contatos salvos.
    * **Favoritos:** Exibe apenas os contatos marcados como favoritos.
* **CRUD de Contatos:**
    * **Create:** Adiciona novos contatos através do formulário.
    * **Read:** Lista todos os contatos e os favoritos em suas respectivas abas.
    * **Update:** Permite marcar/desmarcar um contato como favorito.
    * **Delete:** Permite apagar contatos da agenda.
* **Persistência de Dados:** Utiliza o `expo-storage` para salvar os contatos no armazenamento local do dispositivo, garantindo que os dados não se percam ao fechar o aplicativo.
* **Validação Simples:** Impede o cadastro de contatos com o mesmo e-mail para manter a integridade dos dados.

---

### 🛠️ Tecnologias Utilizadas

* [React Native](https://reactnative.dev/)
* [Expo](https://expo.dev/)
* [Expo Router](https://expo.github.io/router/docs/) (para a navegação por abas)
* [Expo Storage](https://www.npmjs.com/package/expo-storage) (para persistência de dados local)
* [TypeScript](https://www.typescriptlang.org/)
* React Hooks (`useState`, `useEffect`, `useContext`)

---

### 🚀 Como Rodar o Projeto

**1. Clone o repositório:**
```bash
git clone https://github.com/Augusto240/App-Agenda-Contatos-React-Native
```

**2. Navegue até a pasta do projeto:**
```bash
cd App-Agenda-Contatos-React-Native
```

**3. Instale as dependências:**
```bash
npm install
```

**4. Execute o aplicativo:**
```bash
npx expo start
```

Após executar o último comando, o Expo Dev Client será aberto no seu navegador. Use o aplicativo **Expo Go** no seu celular para escanear o QR Code e rodar o app.

---
Desenvolvido como exercício para a matéria de Desenvolvimento para Dispositivos Móveis.