import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {app} from '../firebaseConfig';
import { Link, router } from "expo-router";
import Swal from 'sweetalert2';

export default function CadastroScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const minSenha = 6;
  // const handleCadastro = () => {
  //   console.log("Sucesso", "Cadastro realizado com sucesso!");
  // };

  const auth = getAuth(app)

    const singUp = async() =>{
      if(senha.length >= minSenha){
        if(senha === confirmarSenha){
          try{
            await createUserWithEmailAndPassword(auth, email, senha)
            Swal.fire({
            icon: "success",
            title: "Sucesso",
            text: "Usuário registrado"  
            });
            return router.navigate('/login')
          }
          catch(e){
            return Swal.fire({
            icon: "error",
            title: "Erro",
            text: "Email já existente!"  
            });
          }
        }
        else{
          return Swal.fire({
            icon: "error",
            title: "Erro",
            text: "As senhas não coincidem!"  
            });
        }
      }
      else{
          return Swal.fire({
            icon: "error",
            title: "Erro",
            text: "A senha deve ter no mínimo 6 caracteres!"  
          });
      }
    }

  useEffect(() => {
    console.log(nome, email, senha, confirmarSenha)
  }, [nome,email,senha, confirmarSenha])

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Criar Cadastro</Text>

        <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#aaa" onChangeText={nome => setNome(nome)}/>
        <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#aaa" onChangeText={email => setEmail(email)}/>
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry placeholderTextColor="#aaa" onChangeText={senha => setSenha(senha)}/>
        <TextInput style={styles.input} placeholder="Confirmar senha"  secureTextEntry placeholderTextColor="#aaa" onChangeText={confirmarSenha => setConfirmarSenha(confirmarSenha)}/>

        <TouchableOpacity style={styles.botao} onPress={() => singUp()}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
        <View>
          <Link href={'/login'}style={styles.textoEntrar}>Entrar</Link>
        </View>
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
  textoEntrar: {
    color: "#2E7D32",
    marginTop: 15,
    textDecorationLine: "underline",           
  },
});



