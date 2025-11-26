import { Link, router } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function LoginScreen() { 
  return (
    <View style={styles.container}>
        <View style = {styles.cabecalho}>
            <Link href={'/home'}style={styles.voltar}>Voltar</Link>
            <Text style={styles.titulo}>Bem-Vindo</Text>
        </View>  
        <View style={styles.corpo}>
            <View style={styles.fundotexto}>
                <Text style={styles.texto}>
                    {'\n\nEu uso óculos \n no show porque elas \n querem minha alma!\n\n\n'}
                </Text>
                
                <View style={styles.centro} >
                    <Image style = {{height: 270, width: '90%', borderRadius: 20}}source={require("../assets/images/GatoDeOculos.webp")}></Image>
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
    corpo: {
        height: "75%",
        width: "100%",
        backgroundColor: "#EAF4EC",
        alignItems: "center",
    },
    texto:{
        textAlign: "center",
        fontWeight: "bold",
        color: "#06402B",
        fontFamily: "serif",
        fontSize: 20,
    },
    centro: {
        justifyContent: "center",
        alignItems: "center",
    },
    fundotexto: {
        height: "80%",
        width: "70%",
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        margin: 60  
    },
    rodape: {
        height: "10%",
        width: "100%",
        backgroundColor: "#4CAF50",
        justifyContent: "center",
        alignItems: "center",
    },

});