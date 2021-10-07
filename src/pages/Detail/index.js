import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: "Gabinete Gamer Mavint G05 Sem Fonte Preto"

  })

  return (
    <ScrollView>
      <Image
        source={require('../../assets/Pc-Gamer-Computador-PNG.png')}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}> R$1500,00</Text>
        </View>

        <View>
          <Text style={[styles.title, { fontSize: 30 }]}> Gabinete Gamer Mavint G05 Sem Fonte Preto</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
  },

  image: {
    width: '100%',

  },
  title: {
    fontFamily: 'Anton_400Regular',
  }
})
