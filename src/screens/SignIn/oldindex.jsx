import React, { Component } from 'react';
import {
  Pressable,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import styles from './style';
import { Image } from 'react-native';
import logo1 from '../../assets/images/Facebook.png';
import logo2 from '../../assets/images/Google.png';

class SignIn extends Component {
  state = {
    email: '',
    password: '',

    errors: {},
  };

  handleChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  validateForm = () => {
    const { email, password } = this.state;

    const errors = {};

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Enter a valid email';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    this.setState({ errors });

    return Object.keys(errors).length === 0;
  };

  createAccount = () => {
    const isValid = this.validateForm();

    if (isValid) {
      this.props.navigation.navigate('dashBoard');
    }
  };

  render() {
    const { email, password, errors } = this.state;

    return (
      <KeyboardAvoidingView behavior="padding">
        <View style={{ backgroundColor: '#00D09E' }}>
          <Text style={styles.welcome}>WELCOME</Text>

          <View style={styles.form}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ height: '100%' }}
            >
              <Text style={styles.email}>Username or Email</Text>

              <TextInput
                placeholder="abc@example.com"
                style={styles.information}
                value={email}
                onChangeText={value => this.handleChange('email', value)}
              />

              {errors.email && (
                <Text style={{ color: 'red' }}>{errors.email}</Text>
              )}

              <Text style={styles.password}>Password</Text>

              <TextInput
                placeholder="••••••••"
                secureTextEntry={true}
                style={styles.information}
                value={password}
                onChangeText={value => this.handleChange('password', value)}
              />

              {errors.password && (
                <Text style={{ color: 'red' }}>{errors.password}</Text>
              )}

              <View style={styles.buttonView}>
                <Pressable
                  style={styles.loginButton}
                  onPress={this.createAccount}
                >
                  <Text style={styles.loginButtonText}>Login</Text>
                </Pressable>

                <Pressable
                  style={styles.forgot}
                  onPress={() =>
                    this.props.navigation.navigate('forgotPassword')
                  }
                >
                  <Text style={styles.forgotText}>Forgot Password ?</Text>
                </Pressable>

                <Pressable
                  onPress={() => this.props.navigation.navigate('SignUp')}
                  style={styles.SignUpButton}
                >
                  <Text style={styles.SignUpButtonText}>SignUp</Text>
                </Pressable>

                <Text style={styles.fingerprint}>
                  Use Fingerprint To Access
                </Text>

                <Text style={styles.orSignText}>or sign up with</Text>

                <Image source={logo1} style={styles.image} />

                <Image source={logo2} style={styles.image2} />
              </View>
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignIn;
