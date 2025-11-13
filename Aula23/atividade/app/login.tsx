import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.textoCadastro}>Criar cadastro</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF4EC",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    width: 340,
    borderRadius: 25,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  botao: {
    width: "100%",
    height: 50,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  textoCadastro: {
    color: "#2E7D32",
    marginTop: 15,
    textDecorationLine: "underline",           
  },
});