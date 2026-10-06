import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    welcome : {
        // marginTop : 90,
        paddingTop : 100,
        paddingBottom : 65,
        // marginBottom : 30,
        textAlign:'center',
        fontSize : 30,
        fontWeight : 'semibold',
    },

    backButton : {
        backgroundColor : '#DFF7E2',
        width : '23%',
        borderRadius : 50,
        marginTop : 10,
       
    },

    backButtonText : {
        padding : 5,
        fontSize : 20,
        fontWeight : 500,
        textAlign : 'center'
    },

    form : {
        // flex : 1,
        paddingTop : 3,
        borderTopLeftRadius : 50,
        borderTopRightRadius : 50,
        backgroundColor: '#F1FFF3'
    },

    email : {
        fontSize : 15,
        paddingTop : 90,
        paddingLeft : 52,
        paddingBottom : 8,
        // marginTop : 30,
    },

    password : {
        fontSize : 15,
        paddingTop : 23,
        paddingLeft : 52,
        paddingBottom : 3,
    },

    information : {
        backgroundColor : '#DFF7E2',
        borderRadius : 50,
        paddingLeft : 36,
        // paddingRight : 38,
        marginLeft : 33,
        fontSize : 16,
        color : 'black',
        width : 340,
        height : 41
    },

    buttonView : {
        alignItems : 'center',
        justifyContent : 'center',
        paddingTop : 91,
    },

    loginButton : {
        width : 207,
        height : 45,
        backgroundColor : '#00D09E',
        borderRadius : 50,
    },

    loginButtonText : {
        fontSize : 25,
        fontWeight : 600,
        textAlign : 'center',
        marginTop : 7
    },

    forgotText : {
        fontSize : 17,
        textAlign : 'center',
        marginTop : 20,
        color : 'blue',
        paddingTop : 19,
        paddingBottom : 14
    },

    SignUpButton : {
        backgroundColor : '#DFF7E2',
        // padding : 15,
        width : 207,
        height : 45,
        borderRadius : 50,
    },

    SignUpButtonText : {
        fontSize : 25,
        fontWeight : 600,
        textAlign : 'center',
        marginTop : 7,
    },

    fingerprint : {
        paddingTop : 23,
        paddingBottom : 28,
        fontSize : 14,
        fontWeight : 'semibold'
    },

    orSignText : {
        // paddingTop : 73,
        fontSize : 14,
        paddingBottom : 19
    },

    image : {
        width : 37,
        height : 37,
        marginLeft : -50,
    },

    image2 : {
        width : 37,
        height : 37,
        marginTop : -37,
        marginLeft : 60
    },

    errorMessage : {
        color : 'red',
        marginTop : 3,
        marginLeft : 60,
    }
})


export default styles;