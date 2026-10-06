import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './style'


const changedPassword = () => {

    const componentDidMount = () => {
        setTimeout(() => {
        this.props.navigation.replace('MainTabs');
        }, 2000);
    }

        return (
            <View style={styles.container}>

                <Image
                    style = {styles.image}
                    source={require('../../assets/gifs/success.gif')}
                />

                <Text style={styles.text1}>Password Has Been</Text>
                <Text style={styles.text1}>Changed Successfully</Text>
            </View>
        );
    }

export default changedPassword;