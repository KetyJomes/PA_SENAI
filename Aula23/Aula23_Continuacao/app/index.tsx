import { useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen() {
  const [text,setText] = useState("")
  return (
  <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
    <Text style={style.colorBlack}>Caixinha de perguntas</Text>
    <br />
    <TextInput placeholder='Digite aqui...' onChangeText={text => setText(text)}></TextInput>
    <TouchableOpacity>
      <View>
        <Text>Botão</Text>
      </View>
    </TouchableOpacity>
    <Button
      title="Press Me"
      onPress={()=> console.log("ola")}
      />
      <br />
      <Image 
      style={style.image}
      source={require('../assets/images/Snowball_large.jpg')}
      />
    
  </View>

  );
}

const style = StyleSheet.create({
  colorBlack: {
    color: "black",
    fontSize: 50
  },

  image: {
    width: 300,
    height: 300,
  }

})


