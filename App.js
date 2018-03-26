/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TextInput, Button, Image
} from 'react-native';

const temperaturIcon = require('./src/img/thermometer.png');
const sunnyIcon = require('./src/img/sunny.png');
const sunriseIcon = require('./src/img/sunrise.png');
const pressureIcon = require('./src/img/pressure.png');
const seaIcon = require('./src/img/sea.png');
const windIcon = require('./src/img/wind.png');
const sunIcon = require('./src/img/sun.png');
const sunsetIcon = require('./src/img/sunset.png');
const humidityIcon = require('./src/img/humidity.png');
const grassIcon = require('./src/img/grass.png');

export default class App extends Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '',
        description: '',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
        //loading: false,
      }
    };
  }
  async getWeather() {
    
  try {
    let response = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city + '&appid=2e62f78ca2aa2fd0c2a9eef06bd7cea6&units=metric'
    );
     
    let responseJson = await response.json();
    return this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed
      }
    });
  } catch (error) {
    console.error(error);
  }
}

  
  render() {
    return (
    
      <View style={styles.containerMain}>
      <View style={styles.header}>
          <Text style={styles.headerText}> Prakiraan Cuaca </Text>
      </View>
        <View style={styles.boxSatu}> 
            <Text style={styles.masukanNamaKota}> Masukkan Nama Kota : </Text>
              
            <TextInput
             style={{ textAlign:'center', height: 40, width: 170, fontSize: 20, backgroundColor: 'white' }}
             onChangeText={(city) => this.setState({ city })}
             />
            
            <Button 
              onPress={() => this.getWeather()}
              title="Lihat"
              color="#01579B"
            />
        </View>
        <View style={styles.boxDua}> 

            <View style={styles.containerCildbox} >

                               <View style={styles.cildBox} > 
                                      <View style={styles.iconContainer} > 
                                          <Image source={temperaturIcon} style={styles.icon} />
                                      </View>
                                      <View style={styles.tulisan} > 
                                          <Text> Temp : { this.state.forecast.temp} </Text>
                                      </View>
                                </View>

                                <View style={styles.cildBox} > 
                                      <View style={styles.iconContainer} > 
                                          <Image source={sunIcon} style={styles.icon} />
                                      </View>
                                      <View style={styles.tulisan} > 
                                        <Text> Main : { this.state.forecast.main} </Text>
                                      </View>
                                </View>

                                <View style={styles.cildBox} > 
                                      <View style={styles.iconContainer} > 
                                          <Image source={sunriseIcon} style={styles.icon} />
                                      </View>
                                      <View style={styles.tulisan} > 
                                        <Text> Sunrise : { this.state.forecast.sunrise} </Text>
                                      </View>
                                </View>

                                <View style={styles.cildBox} > 
                                      <View style={styles.iconContainer} > 
                                          <Image source={seaIcon} style={styles.icon} />
                                      </View>
                                      <View style={styles.tulisan} > 
                                        <Text> Sea Level : { this.state.forecast.sea_level} </Text>
                                      </View>
                                </View>

                                <View style={styles.cildBox} > 
                                      <View style={styles.iconContainer} > 
                                          <Image source={pressureIcon} style={styles.icon} />
                                      </View>
                                      <View style={styles.tulisan} > 
                                        <Text> Pressure : { this.state.forecast.pressure} </Text>
                                      </View>
                                </View>



                
            </View>

            <View style={styles.containerCildbox} >

                                <View style={styles.cildBox} > 
                                      <View style={styles.iconContainer} > 
                                          <Image source={windIcon} style={styles.icon} />
                                      </View>
                                      <View style={styles.tulisan} > 
                                        <Text> Wind Speed : { this.state.forecast.speed} </Text>
                                      </View>
                                </View>

                                <View style={styles.cildBox} > 
                                      <View style={styles.iconContainer} > 
                                          <Image source={sunnyIcon} style={styles.icon} />
                                      </View>
                                      <View style={styles.tulisan} > 
                                          <Text> Main Desc : { this.state.forecast.description} </Text>
                                      </View>
                                </View>

                                <View style={styles.cildBox} > 
                                      <View style={styles.iconContainer} > 
                                          <Image source={sunsetIcon} style={styles.icon} />
                                      </View>
                                      <View style={styles.tulisan} > 
                                        <Text> Sunset : { this.state.forecast.sunset} </Text>
                                      </View>
                                </View>

                                <View style={styles.cildBox} > 
                                      <View style={styles.iconContainer} > 
                                          <Image source={humidityIcon} style={styles.icon} />
                                      </View>
                                      <View style={styles.tulisan} > 
                                          <Text> Humidity : { this.state.forecast.humidity} </Text>
                                      </View>
                                </View>

                                <View style={styles.cildBox} > 
                                      <View style={styles.iconContainer} > 
                                          <Image source={grassIcon} style={styles.icon} />
                                      </View>
                                      <View style={styles.tulisan} > 
                                          <Text> Ground Level : { this.state.forecast.grnd_level} </Text>
                                      </View>
                                </View>
            </View>

        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}> Copyright @ArdaDevelop </Text>
      </View>
      
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#00BCD4',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  footer: {
    flex: 1,
    backgroundColor: '#00BCD4',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  containerMain: {
    flex: 6,
    backgroundColor: '#BBDEFB'
  },
  boxSatu: {
    flex: 2,
    backgroundColor: '#00BCD4',
    marginLeft: 20,
    marginRight: 20,
    marginTop : 30,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  boxDua: {
    flex: 6,
    backgroundColor: '#00BCD4',
    marginLeft: 20,
    marginRight: 20,
    marginTop : 15,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  masukanNamaKota: {
    color: 'white',
    fontSize: 20
  },
  headerText: {
    color: 'white',
    fontSize: 25
  },
  footerText: {
    color: 'black',
    fontSize: 17
  },
  containerCildbox: {
    backgroundColor: '#00BCD4',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  cildBox: {
    width: 140,
    height: 40,
    justifyContent: 'flex-start',
    backgroundColor: 'steelblue',
    flexDirection: 'row'
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#FFAB00',
    borderColor: '#FFAB00',
    borderWidth: 1,
    justifyContent: 'center',
    height: 40,
    width: 30,
  },
  tulisan: {
    flex: 3, 
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    tintColor: 'white',
    height: 20,
    width: 20,
  }

});
