import React from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

export default function CadastroScreen() {
  const handleCadastrar = () => {
    Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Cadastro</Text>

      <TextInput
        placeholder="Nome completo"
        style={styles.input}
      />

      <TextInput
        placeholder="E-mail"
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
      />

      <Button title="Cadastrar" onPress={handleCadastrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
    paddingHorizontal: 10,
    backgroundColor: "#F5F5F5",
  },
});
