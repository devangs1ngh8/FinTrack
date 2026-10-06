import React, { Component } from 'react'
import { KeyboardAvoidingView, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import styles from './style';


class newPassword extends Component {
    render () {
        return (

            <KeyboardAvoidingView>

                <ScrollView>

            <View style={{flex:1, backgroundColor:'#00D09E'}}>

                <Text style={styles.head}>New Password</Text>

                <View style={styles.form}>

                    <Text style={styles.new}>New Password</Text>
                    <TextInput
                        placeholder='••••••••'
                        secureTextEntry={true}
                        style={styles.information}
                    />

                    <Text style={styles.confirm}>Confirm New Password</Text>
                    <TextInput
                        placeholder='••••••••'
                        secureTextEntry={true}
                        style={styles.information}
                    />

                    <Pressable
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('changedPassword')}
                    >
                        <Text style={styles.buttonText}>Change Password</Text>
                    </Pressable>

                </View>
            </View>

            </ScrollView>

            </KeyboardAvoidingView>
        );
    }
}

export default newPassword;