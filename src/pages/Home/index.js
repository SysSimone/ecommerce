import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Gamers from '../../component/Gamers';



export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/banner.png')}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={{ fontFamily: 'Anton_400Regular', fontSize: 20 }} > Sua loja de produtos gamers </Text>
                    <Text style={styles.text}> um novo patamar de performance  A Hyper X </Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                        <MaterialIcons
                            name="filter-list"
                            size={24}
                            color='black'
                        />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.line} />

            <ScrollView >

                <Text style={{ fontFamily: 'Anton_400Regular', fontWeight: 'bold', fontSize: 15 }}> LANÇAMENTOS </Text>


                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Gamers img={require('../../assets/HyperX-H7-Cloud-Flight-2.png')} cost="R$1500,00" onClick={() => navigation.navigate('Detail')}>
                    Headset HyperX CloudFlight
                    </Gamers >

                    <Gamers img={require('../../assets/poltrona6.png')} cost="R$2500,00" onClick={() => alert('CLICOU')}>
                        Poltrona Gamer Cougar Ranger 
                    </Gamers>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Gamers img={require('../../assets/mouse_gamer_redragon_king_cobra_preto_led_rgb_m3.png')} cost="R$275,00" onClick={() => alert('CLICOU')}>
                        MOUSE GAMER REDRAGON COBRA PRETO LED RGB M711 FPS
                    </Gamers>

                    <Gamers img={require('../../assets/Razer-Hammerhead-DUO4.png')} cost="R$100,00" onClick={() => alert('CLICOU')}>
                        Razer Hammerhead DUO Fone de ouvido
                    </Gamers>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Gamers img={require('../../assets/aoc1.png')} cost="R$2500,00" onClick={() => alert('CLICOU')}>
                        Monitor Gamer
                    </Gamers >

                    <Gamers img={require('../../assets/joystick-logitech-extreme-3d-pro.png')} cost="R$1350,00" onClick={() => alert('CLICOU')}>
                        joystick-logitech-extreme-3d-pro
                    </Gamers >
                </View>



            </ScrollView>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
    },
    header: {
        marginBottom: 8,
    },
    image: {
        width: '100%',
        marginTop: 30,
        marginRight: '10%',
        marginHorizontal: '1%',
        height: 350,
    },
    textContainer: {
        flexDirection: 'column',
        marginVertical: '1%',
        marginHorizontal: '1%',
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 10,
        marginHorizontal: '1%'
    },
    line: {
        borderBottomColor: "#D8D8D8",
        borderBottomWidth: 2,

    }
});