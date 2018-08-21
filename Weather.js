import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherCases = {
    Rain : {
        colors:["#00C6FB","#005BEA"],
        title: "Raining like a S2",
        subtitle: "For more info look outside",
        icon: "weather-rainy"
    },
    Clear : {
        colors:["#FEF253","#ff7300"],
        title: "Sunny as S2",
        subtitle: "Go get your ass burnt",
        icon: "weather-sunny"
    },
    Thunderstorm : {
        colors:["#00ecbc","#007adf"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
        icon: "weather-lightning-rainy"
    },
    Clouds : {
        colors:["#d7d2cc","#304352"],
        title: "Clouds as S2",
        subtitle: "I know, fucking boring",
        icon: "weather-cloudy"
    },
    Snow : {
        colors:["#7de2fc","#b9b6e5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no.",
        icon: "weather-snowy"
    },
    Drizzle : {
        colors:["#89f7fe","#66a6ff"],
        title: "Drizzle",
        subtitle: "Is like rain, but g...",
        icon: "weather-windy"
    },
    Haze : {
        colors:["#00C6FB","#005BEA"],
        title: "Haze",
        subtitle: "",
        icon: "weather-hail"
    },
    Mist : {
        colors:["#00C6FB","#005BEA"],
        title: "Mist",
        subtitle: "It's like you have no glasses on.",
        icon: "weather-fog"
    }
}

function Weather({temp, name}){
    return(
        <LinearGradient colors={weatherCases[name].colors} 
                        style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color='white' size={144}
                        name={weatherCases[name].icon}></MaterialCommunityIcons>
                <Text style={styles.temp}>{(temp-273.15).toFixed(1)}℃</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[name].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[name].subtitle}</Text>
            </View>
        </LinearGradient>  
    );
}

export default Weather;


const styles = StyleSheet.create({
    container: {
        flex:1
    },
    temp:{
        fontSize: 88,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 24,
        fontWeight: '100'
    },
    upper:{
        flex:.7,
        alignItems: "center",
        justifyContent: "center"
    },
    lower:{
        flex:.3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 38,
        backgroundColor: 'transparent',
        color : 'white'
    },
    subtitle:{
        fontSize: 24,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 24
    }
});