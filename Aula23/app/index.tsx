import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
  <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
    <Text style={style.colorBlue}>Hello World!!!</Text>
    <br />
    <View style={style.square}></View>
   
  </View>
  );
}

const style = StyleSheet.create({
  colorBlue: {
    color: "blue",
    fontSize: 50
  },
  square:{
    height: 301,
    width: 301,
    backgroundColor: 'rebeccapurple'
  }
})


