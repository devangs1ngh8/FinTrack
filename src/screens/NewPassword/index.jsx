import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const newPassword = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const validateForm = () => {
    const { password, confirmPassword } = formData;
    const newErrors = {};

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
      navigation.navigate('SignIn');
    }
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: '#00D09E' }}>
          <Text style={styles.head}>New Password</Text>

          <View style={styles.form}>
            <Text style={styles.new}>New Password</Text>
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

            <Text style={styles.confirm}>Confirm New Password</Text>
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

            <Pressable style={styles.button} onPress={createAccount}>
              <Text style={styles.buttonText}>Change Password</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default newPassword;
