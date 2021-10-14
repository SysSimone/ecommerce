import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Button from '../../component/Button';
import Footer from '../../component/Footer';


export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: "HyperX-H7-Cloud-Flight"

  })

  return (
    <ScrollView>
      <Image
        source={require('../../assets/HyperX-H7-Cloud-Flight-2.png')}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 20 }]}> R$3500,00</Text>
        </View>

        <View>
          <Text style={[styles.title, { fontSize: 10 }]}> Headset HyperX CloudFlight,
           teclado mecânico HyperX Alloy Elite RGB e mouse HyperX Pulsefire Surge RGB oferecem 
           aos jogadores um novo patamar de performance com uma linha de produtos gamers com três periféricos
           que oferecem máximo desempenho, tanto para  jogadores profissionais: o headset wireless HyperX Cloud Flight.
          </Text>
        </View>

        <Button />
        <View style={styles.line} />
        <Footer />


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  

  image: {
    width: '100%',
        marginTop: 30,
        marginRight: '10%',
        marginHorizontal: '1%',
        height: 350,



  },
  title: {
    margin: 8,
    marginTop: '1%',
    paddingHorizontal: '2%'
    //fontFamily: 'Anton_400Regular',
    
  },

  line: {
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  }
});
