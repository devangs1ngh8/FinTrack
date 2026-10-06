import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';

class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('SignUp');
    }, 2000);
  }

  render() {
    return (
      <View style={styles.splashView}>
        <Image
          source={require('../../assets/images/splashScreenLogo.png')}
        />

        <Text style={styles.welcome}>
          WELCOME
        </Text>
      </View>
    );
  }
}

export default Splash;