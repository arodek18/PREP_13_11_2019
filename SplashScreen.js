import React from 'react';
import { StyleSheet, BackHandler, Text, View, Alert, TouchableOpacity, WebView, Image, ImageBackground } from 'react-native';

export default class SplashScreen extends React.Component {

  constructor(props){

    super(props)

    {

       this.state={

           title:'',

       };
    }
}

 componentDidMount(){

   var self = this;
    setTimeout(function() {
        self.props.navigation.navigate('Login')
      },4000);

 }

 componentWillMount(){


 }

  render(){

    return(
      <ImageBackground source={require('./assets/Splash.png')} style={styles.container} resizeMode='cover'>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
