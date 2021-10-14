import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Gamers from '../../component/Gamers';

export default function Footer() {
    return (
        <View>
            <Text>Você também pode gostar </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View>
                        <Gamers img={require('../../assets/poltrona6.png')} cost="2500,00">
                            Poltrona gamer
                        </Gamers>
                    </View>
                    <View>
                        <Gamers img={require('../../assets/mouse_gamer_redragon_king_cobra_preto_led_rgb_m3.png')} cost="300,00">
                            mouse gamer redragon king_cobra preto led
                        </Gamers>
                    </View>
                    <View>
                        <Gamers img={require('../../assets/joystick-logitech-extreme-3d-pro.png')} cost="1000,00">
                            joystick
                        </Gamers>
                    </View>
                    <View>
                        <Gamers img={require('../../assets/Razer-Hammerhead-DUO4.png')} cost="200,00">
                        Fone de ouvido
                        </Gamers>
                    </View>

                   
                    <View>
                        <Gamers img={require('../../assets/aoc1.png')} cost="2200,00">
                        Monitor Gamer
                        </Gamers>
                    </View>

                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',

    }

})