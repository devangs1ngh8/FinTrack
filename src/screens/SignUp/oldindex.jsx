import React, { Component } from 'react';

import {
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';


import styles from './style';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
    confirmPassword: '',

    errors: {},
  };

  handleChange = (field, value) => {
    this.setState({
      [field]: value, // understand what it is
    });
  };

  validateForm = () => {
    const { name, email, phone, dob, password, confirmPassword } = this.state;

    const errors = {};

    if (!name) {
      errors.name = 'Name is required';
    } else if (!/^[A-Za-z][A-Za-z ]*$/.test(name)) { // check without star
      errors.name = 'Name can only contain letters';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Enter a valid email';
    }

    if (!phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = 'Phone number must contain exactly 10 digits';
    }

    if (!dob) {
      errors.dob = 'DOB is required';
    } else if (!/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(dob)) {
      errors.dob = 'Use DD/MM/YY format';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    this.setState({ 
      errors : errors
    });

    return Object.keys(errors).length === 0;
  };

  createAccount = () => {
    const isValid = this.validateForm();

    if (isValid) {
      this.props.navigation.replace('dashBoard'); // define above this.props
    }
  };


  render() {
    const { name, email, phone, dob, password, confirmPassword, errors } =
      this.state;
    
    const navigation = this.props.navigation;

    return (
      <KeyboardAvoidingView behavior="padding">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, backgroundColor: '#00D09E' }}>
            <Text style={styles.heading}>Create Account</Text>

            <View style={styles.form}>

              // Name
              <Text style={styles.info}>Full Name</Text>
              <TextInput
                placeholder="Enter your name"
                style={styles.information}
                value={name}
                onChangeText={value => this.handleChange('name', value)}
              />
              {errors.name && (
                <Text style={{ color: 'red' }}>{errors.name}</Text> // remove inline styling
              )}



              // Email
              <Text style={styles.info}>Email</Text>
              <TextInput
                placeholder="Enter your email"
                style={styles.information}
                keyboardType="email-address"
                value={email}
                onChangeText={value => this.handleChange('email', value)}
              />
              {errors.email && (
                <Text style={{ color: 'red' }}>{errors.email}</Text>
              )}



              // Phone
              <Text style={styles.info}>Phone Number</Text>
              <TextInput
                placeholder="Enter your phone number"
                style={styles.information}
                keyboardType="number-pad"
                maxLength={10}
                value={phone}
                onChangeText={value =>
                  this.handleChange('phone', value.replace(/[^0-9]/g, ''))
                }
              />
              {errors.phone && (
                <Text style={{ color: 'red' }}>{errors.phone}</Text>
              )}



              // DOB
              <Text style={styles.info}>D.O.B.</Text>
              <TextInput
                placeholder="DD / MM / YY"
                style={styles.information}
                // keyboardType='number-pad'
                maxLength={10}
                value={dob}
                onChangeText={value => this.handleChange('dob', value)}
              />
              {errors.dob && 
                <Text style={{ color: 'red' }}>
                  {errors.dob}
                </Text>
              }



              // Password
              <Text style={styles.info}>Password</Text>
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



              // Confirm Password
              <Text style={styles.info}>Confirm Password</Text>
              <TextInput
                placeholder="••••••••"
                secureTextEntry={true}
                style={styles.information}
                value={confirmPassword}
                onChangeText={value =>
                  this.handleChange('confirmPassword', value)
                }
              />
              {errors.confirmPassword && (
                <Text style={{ color: 'red' }}>{errors.confirmPassword}</Text>
              )}



              
              // Buttons
              <View style={styles.buttonView}>
                <Text style={styles.terms}>By continuing, you agree to</Text>
                <Text style={styles.terms2}>
                  Terms of use and Privacy Policy.
                </Text>

                <Pressable
                  style={styles.signupButton}
                  onPress={this.createAccount}
                >
                  <Text style={styles.signupButtonText}>Create Account</Text>
                </Pressable>

                <Pressable style={styles.loginButton}>
                  <Text style={styles.loginText}>Already have an account?</Text>

                  <Text
                    style={styles.loginButtonText}
                    onPress={() => navigation.navigate('SignIn')}
                  >
                    Login
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default SignUp;
