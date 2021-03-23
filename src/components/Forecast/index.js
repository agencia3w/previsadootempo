import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {condition} from '../../utils/condition';

export default function Forecast({ data }) {
    let icons = condition(data.condition)

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{data.date}</Text>
            <Ionicons name={icons.name} color={icons.color} size={25} />
            <View style={styles.temp}>
                <Text>{data.min}º</Text>
                <Text style={{fontSize: 18}}>{data.max}º</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginLeft: 12,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 14,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    date: {
        fontSize: 14
    },
    temp:{
        alignItems: 'center'
    }
})