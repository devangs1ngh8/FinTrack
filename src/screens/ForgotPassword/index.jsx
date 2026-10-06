import React, { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import securityPin from '../SecurityPin';

const forgotPassword = () => {
  const navigation = useNavigation();

  const [ email, setEmail ] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const createAccount = () => {
    const isValid = validateForm();

    if (isValid) {
      navigation.navigate('securityPin');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#00D09E' }}>
      <Text style={styles.headText}>Forgot Password</Text>

      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.reset}>Reset Password?</Text>
          <Text style={styles.lorem}>
            Lorem ipsum dolor sit amet, consectetur adgs elit. Vitae aperiam
            vero dolorum.
          </Text>

          <Text style={styles.email}>Enter Email Address</Text>

          <TextInput
            placeholder="example@example.com"
            style={styles.emailPlaceholder}
            value={email}
            onChangeText={setEmail}
          />

          {errors.email && (
              <Text style={styles.errorMessage}>{errors.email}</Text>
            )}

          <View style={styles.buttons}>
            <Pressable style={styles.nextButton} onPress={createAccount}>
              <Text style={styles.buttonText}>Next Step</Text>
            </Pressable>

            <Text style={styles.noAccount}>Don't have an account?</Text>

            <Pressable
              style={styles.signUpButton}
              onPress={() => navigation.navigate('SignUp')}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default forgotPassword;
