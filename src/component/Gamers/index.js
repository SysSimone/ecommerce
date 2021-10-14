import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Gamers(props) {

    function filterDesc(desc) {
        if (desc.length < 27) {
            return desc;
        }

        return `${desc.substring(0, 22)}...`;

    }

    return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Image
                source={props.img}
                style={styles.gamersImg}
            />
            <Text style={styles.gamersText}>
                {filterDesc(props.children)}
            </Text>
            <View opacity={0.4}>
                <Text style={styles.gamersText}> {props.cost}</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    gamersImg: {
        backgroundColor: '#D8D8D8',
        width: 175,
        height: 175,
        justifyContent: 'space-around'
    },

    gamersText: {
        fontSize: 10
    }

});