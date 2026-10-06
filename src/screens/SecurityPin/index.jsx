import React, { useState } from 'react'
import { View, Text, Pressable, ScrollView, KeyboardAvoidingView } from 'react-native';
import styles from './style';
import { OtpInput } from 'react-native-otp-entry'
import { useNavigation } from '@react-navigation/native';

const securityPin = () => {

    const navigation = useNavigation();

    const [ otp, setOtp ] = useState ('')
    const [ errors, setErrors ] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if(otp.length !== 6) {
            newErrors.otp = "Please enter a 6-digit OTP"
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const createAccount = () => {
        const isValid = validateForm();

        if(isValid) {
            navigation.navigate('newPassword')
        }
    }


        return (

            <KeyboardAvoidingView behavior='padding'>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{flex:1, backgroundColor: '#00D09E'}}>
                        
                        <View style={styles.head}>
                            <Text style={styles.headText}>Security Pin</Text>
                        </View>

                        <View style={styles.form}>

                            <Text style={styles.pinText}>Enter Security Pin</Text>

                            <View style={styles.otpBox}>

                            <OtpInput
                                numberOfDigits={6}
                                // onTextChange={(text) => console.log(text)}
                                focusColor={'rgba(18, 192, 27, 0.6)'}
                                value={otp}
                                onTextChange={setOtp}

                                theme={{
                                    pinCodeContainerStyle : styles.pinCodeContainerStyle
                                }}
                            />

                            {errors.otp && (
                                <Text style={styles.errorMessage}>
                                    {errors.otp}
                                </Text>
                            )}

                            </View>


                            <Pressable
                                style={styles.submitButton}
                                onPress={createAccount}
                            >
                                <Text style={styles.buttonText}>Submit</Text>
                            </Pressable>

                            <Pressable
                                style={styles.sendButton}
                            >
                                <Text style={styles.buttonText}>Send Again</Text>
                            </Pressable>


                            <Text style={styles.noAccount}>Don't have an account ?</Text>
                            <Pressable
                                style={styles.signUpButton}
                                onPress={() => navigation.navigate('SignUp')}
                            >
                                <Text style={styles.signUpText}>Sign Up</Text>
                            </Pressable>

                        </View>

                    </View>

                </ScrollView>

            </KeyboardAvoidingView>
        );
    }

export default securityPin;