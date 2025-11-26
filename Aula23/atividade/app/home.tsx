import { db } from "@/firebaseConfig";
import { Link, router } from "expo-router";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginScreen() { 
    const [nomeGato, setNomeGato] = useState("");
    const [idade, setIdade] = useState("");
    const [raca, setRaca] = useState("");
    const [bio, setBio] = useState("");
    const [imageUrl, setImageUrl] = useState('');


    async function cadastrarGato() {
        try {
      
            if (!nomeGato || !idade || !raca ) {
                console.log("Preencha Nome, idade e raça.");
                return;
            }

            const gato = {
                nomeGato,
                idade: Number(idade),
                raca,
                bio: bio || null,
                imageUrl,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            };

            await addDoc(collection(db, "gatos"), gato);
            console.log("Gato cadastrado!");

        } catch (err) {
            console.log("Erro ao cadastrar:", err);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Link href={'/login'}style={styles.voltar}>Login</Link>
                <Text style={styles.titulo}>Bem-Vindo</Text>
            </View>

            <View style={styles.corpo}>
                <View style={styles.fundocadastro}>
                    <Text style={styles.titulo2}>Cadastrar Gato🐾</Text>
                    <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#aaa" value={nomeGato} onChangeText={setNomeGato} />
                    <TextInput style={styles.input} placeholder="Idade" placeholderTextColor="#aaa" value={idade} onChangeText={setIdade}/>
                    <TextInput style={styles.input} placeholder="Raça" placeholderTextColor="#aaa" value={raca} onChangeText={setRaca}/>
                    <TextInput style={styles.input} placeholder="Bio (opcional)" placeholderTextColor="#aaa" value={bio} onChangeText={setBio}/>
                    <TextInput placeholder="Link da imagem (opcional)" placeholderTextColor="#aaa" onChangeText={setImageUrl} style={styles.input}/>

                    <TouchableOpacity style={styles.botao} onPress={cadastrarGato}>
                        <Text style={styles.textoBotao}>Cadastrar</Text>
                    </TouchableOpacity>
                    <View>
                        <Link href={'/gatos'}style={styles.verGato}>Ver gato de óculos</Link>
                    </View>
                </View>
            </View>

            <View style={styles.rodape}>
                <Text style={styles.tituloRodape}>© 2025 - Criado por Ketlyn Sofia Jomes</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titulo: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#EAF4EC",
        marginBottom: 20,
    },
    titulo2: {
        fontSize: 30,
        color: "#06402B",
        marginBottom: 20,
        fontFamily: "𝐒𝐞𝐫𝐢𝐟 𝐁𝐨𝐥𝐝",
        fontWeight: "bold",
    },
    verGato: {
        fontWeight: "bold",
        textDecorationLine: 'underline',
        color: "#4CAF50",
        top: 0, 
        marginTop: 40

    },
    voltar: {
        position: 'absolute', 
        fontWeight: "bold",
        textDecorationLine: 'underline',
        color: "#EAF4EC",
        top: 0, 
        left: 0, 
        marginLeft: 10, 
        marginTop: 60 
    },
    tituloRodape: {
        fontSize: 15,
        color: "#EAF4EC",
        marginBottom: 20,
        fontFamily: "𝐒𝐞𝐫𝐢𝐟 𝐁𝐨𝐥𝐝"
    },
    cabecalho: {
        height: "15%",
        width: "100%",
        backgroundColor: "#4CAF50",
        justifyContent: "center",
        alignItems: "center",
    },
    corpo: {
        height: "75%",
        width: "100%",
        backgroundColor: "#EAF4EC",
        alignItems: "center",
    },
    fundocadastro: {
        height: "80%",
        width: "70%",
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        margin: 60  
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
    rodape: {
        height: "10%",
        width: "100%",
        backgroundColor: "#4CAF50",
        justifyContent: "center",
        alignItems: "center",
    },
});
