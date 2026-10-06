import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from 'react-native';

import logo1 from '../../assets/images/Facebook.png';
import logo2 from '../../assets/images/Google.png';

import styles from './style';

const SignIn = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const validateForm = () => {
    const { email, password } = formData;

    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email';
    }

    if (!password) {
      newErrors.password = 'Password is required';
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
              value={formData.email}
              onChangeText={value => handleChange('email', value)}
            />

            {errors.email && (
              <Text style={styles.errorMessage}>{errors.email}</Text>
            )}

            <Text style={styles.password}>Password</Text>

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

            <View style={styles.buttonView}>
              <Pressable style={styles.loginButton} onPress={createAccount}>
                <Text style={styles.loginButtonText}>Login</Text>
              </Pressable>

              <Pressable
                style={styles.forgot}
                onPress={() => navigation.navigate('forgotPassword')}
              >
                <Text style={styles.forgotText}>Forgot Password ?</Text>
              </Pressable>

              <Pressable
                onPress={() => navigation.navigate('SignUp')}
                style={styles.SignUpButton}
              >
                <Text style={styles.SignUpButtonText}>SignUp</Text>
              </Pressable>

              <Text style={styles.fingerprint}>Use Fingerprint To Access</Text>

              <Text style={styles.orSignText}>or sign up with</Text>

              <Image source={logo1} style={styles.image} />

              <Image source={logo2} style={styles.image2} />
            </View>
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
