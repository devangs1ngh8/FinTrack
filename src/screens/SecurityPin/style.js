const { StyleSheet } = require("react-native");

const styles = StyleSheet.create ({
    head : {
        padding : 30,
        marginTop : 70,
        alignItems : 'center',
        marginBottom : 30
    },

    headText : {
        fontSize : 38,
        fontWeight : 700
    },

    form : {
        flex : 1,
        backgroundColor : '#F1FFF3',
        borderTopLeftRadius : 50,
        borderTopRightRadius : 50,
        padding : 30,
        alignItems : 'center',
    },

    pinText : {
        fontSize : 25,
        fontWeight : 500,
        paddingTop : 70

    },

    otpBox : {
        marginTop : 70,
        paddingBottom : 70,
    },

    pinCodeContainerStyle : {
        width : 50,
        height : 50,
        marginLeft : 8,
        marginRight : 8,
        borderRadius : 100,
        borderWidth : 3,
        borderColor : 'green'
    },

    submitButton : {
        backgroundColor : '#00D09E',
        width : 170,
        height : 44,
        borderRadius : 50,
        marginTop : 30
    },

    buttonText : {
        fontSize : 20,
        fontWeight : 600,
        // padding : 15,
        textAlign : 'center',
        marginTop : 9
    },

    sendButton : {
        marginTop : 20,
        backgroundColor : '#DFF7E2',
        width : 170,
        height : 44,
        borderRadius : 50
    },

    noAccount : {
        marginTop : 150,
        // paddingTop : 50,
        fontSize : 15
    },

    signUpText : {
        color : 'blue'
    },

    errorMessage : {
        color : 'red',
        marginLeft : 17,
        marginTop : 8,
    }
})

export default styles;