import { collection, deleteDoc, doc, getDocs, query, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { db } from "../firebaseConfig";

export default function ListaGato() {

    const [gatos, setGatos] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchGatos() {
        try {
            const q = query(collection(db, "gatos"));
            const snapshot = await getDocs(q);

            console.log(snapshot.docs)

            const list = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setGatos(list);

        } catch (err) {
            console.log("Erro ao buscar gatos:", err);
        } finally {
            setLoading(false);
        }
    }

    async function updateGatos(id: string, data: any) {
        try {
            const ref = doc(db, "gatos", id);
            await updateDoc(ref, data);

            alert("Informações do gato atualizado!");
            fetchGatos();

        } catch (err) {
            console.log("Erro ao atualizar:", err);
        }
    }

    async function deleteGatos(id: string) {
        try {
            const ref = doc(db, "gatos", id);
            await deleteDoc(ref);

            alert("Gato deletado!");
            fetchGatos();

        } catch (err) {
            console.log("Erro ao deletar:", err);
        }
    }

    useEffect(() => {
        fetchGatos();
    }, []);

    if (loading) {
        return (
            <View style={{ padding: 20 }}>
                <Text>Carregando...</Text>
            </View>
        );
    }

    if (gatos.length === 0) {
        return (
            <View style={{ padding: 20 }}>
                <Text>Nenhum gato encontrado.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>Gatos</Text>
            </View>

            <FlatList
                data={gatos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View
                        style={{
                            backgroundColor: "#fff",
                            padding: 16,
                            borderRadius: 12,
                            marginBottom: 15,
                            elevation: 3,
                        }}
                    >
                        <Text style={{ fontSize: 18, fontWeight: "600" }}>
                            {item.nomeGato}:
                        </Text>
                        <Text style={{ opacity: 0.7 }}>Idade: {item.idade}</Text>
                        <Text style={{ opacity: 0.7 }}>Raça: {item.raca}</Text>
                        <Text style={{ opacity: 0.7 }}>Bio: {item.bio}</Text>

                        <View style={{ flexDirection: "row", marginTop: 12, gap: 12 }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#3498db",
                                    paddingVertical: 8,
                                    paddingHorizontal: 14,
                                    borderRadius: 8,
                                }}
                                onPress={() =>
                                    updateGatos(item.id, { brand: "Atualizado" })
                                }
                            >
                                <Text style={{ color: "#fff", fontWeight: "600" }}>Editar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#e74c3c",
                                    paddingVertical: 8,
                                    paddingHorizontal: 14,
                                    borderRadius: 8,
                                }}
                                onPress={() => deleteGatos(item.id)}
                            >
                                <Text style={{ color: "#fff", fontWeight: "600" }}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )} />
            <View style={styles.rodape}>
                <Text style={styles.tituloRodape}>© 2025 - Criado por Ketlyn Sofia Jomes</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:  "#EAF4EC"
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

