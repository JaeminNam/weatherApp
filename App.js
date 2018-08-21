import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather';
import {LinearGradient} from 'expo';

const API_KEY = "00a39d8677317c460138ae90e0ca75cd";

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temp:null,
    name:null
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
          this.jmGetWeather(position.coords.latitude,position.coords.longitude);
      },
      error => {
        this.setState({
          error:error
        })
      }
    );
  }

  jmGetWeather =(lat, long) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
    )
        .then(response => response.json())
        .then(json => {
          this.setState({
            temp : json.main.temp,
            name : json.weather[0].main,
            isLoaded : true
          });
        });
  }

  render() {
    const { isLoaded, error, temp, name } = this.state;
    return (
      <LinearGradient colors={["#777","#333"]} style={styles.linear}>
        <View style={styles.container}>
          <StatusBar hidden={true}/>
          {isLoaded ? <Weather temp={temp} name={name}/> : (
          <View style={styles.loading}>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <Text style={styles.loadingText}>Weather App</Text>
          </View>
          )}
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'transparent'
  },
  linear:{
    flex:1
  },
  loading: {
    flex:1,
     backgroundColor: 'transparent',
     justifyContent:'flex-end',
     paddingLeft:25,
     paddingRight:25,
     alignItems:'center'
  },
  loadingText:{
    fontSize: 45,
    marginBottom:100,
    color: '#CCC',
    fontWeight:"300"
  },
  errorText: {
    color:'red',
    marginBottom: 200,
    fontSize: 20
  }
});
