import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import {
  Text,
  View,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from './style';

const SignUp = () => {
  const navigation = useNavigation();

  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    password: '',
    confirmPassword: '',
  });

  const [ errors, setErrors ] = useState({});

  const handleChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, phone, dob, password, confirmPassword } = formData;

    const newErrors = {};

    if (!name) {
      newErrors.name = 'Name is required';
    } else if (!/^[A-Za-z][A-Za-z ]*$/.test(name)) {
      newErrors.name = 'Name can only contain letters';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      newErrors.email = 'Enter a valid email';
    }

    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.email = 'Phone number must contain exactly 10 digits';
    }

    if (!dob) {
      newErrors.dob = 'DOB is required';
    } else if (!/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(dob)) {
      newErrors.dob = 'Use DD/MM/YYYY format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const createAccount = () => {
    const isValid = validateForm();

    if (isValid) {
      navigation.replace('MainTabs');
    }
  };

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
              value={formData.name}
              onChangeText={value => handleChange('name', value)}
            />
            {errors.name && (
              <Text style={styles.errorMessage}>{errors.name}</Text>
            )}
            // Email
            <Text style={styles.info}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              style={styles.information}
              keyboardType="email-address"
              value={formData.email}
              onChangeText={value => handleChange('email', value)}
            />
            {errors.email && (
              <Text style={styles.errorMessage}>{errors.email}</Text>
            )}
            // Phone
            <Text style={styles.info}>Phone Number</Text>
            <TextInput
              placeholder="Enter your phone number"
              style={styles.information}
              keyboardType="number-pad"
              maxLength={10}
              value={formData.phone}
              onChangeText={value =>
                handleChange('phone', value.replace(/[^0-9]/g, ''))
              }
            />
            {errors.phone && (
              <Text style={styles.errorMessage}>{errors.phone}</Text>
            )}
            // DOB
            <Text style={styles.info}>D.O.B.</Text>
            <TextInput
              placeholder="DD / MM / YY"
              style={styles.information}
              // keyboardType='number-pad'
              maxLength={10}
              value={formData.dob}
              onChangeText={value => handleChange('dob', value)}
            />
            {errors.dob && (
              <Text style={styles.errorMessage}>{errors.dob}</Text>
            )}
            // Password
            <Text style={styles.info}>Password</Text>
            <TextInput
              placeholder="••••••••"
              secureTextEntry={true}
              style={styles.information}
              value={formData.password}
              onChangeText={value => handleChange('password', value)}
            />
            {errors.password && (
              <Text style={styles.errorMessage}>{errors.password}</Text>
            )}
            // Confirm Password
            <Text style={styles.info}>Confirm Password</Text>
            <TextInput
              placeholder="••••••••"
              secureTextEntry={true}
              style={styles.information}
              value={formData.confirmPassword}
              onChangeText={value => handleChange('confirmPassword', value)}
            />
            {errors.confirmPassword && (
              <Text style={styles.errorMessage}>{errors.confirmPassword}</Text>
            )}
            // Buttons
            <View style={styles.buttonView}>
              <Text style={styles.terms}>By continuing, you agree to</Text>
              <Text style={styles.terms2}>
                Terms of use and Privacy Policy.
              </Text>

              <Pressable style={styles.signupButton} onPress={createAccount}>
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
};

export default SignUp;