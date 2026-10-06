const { StyleSheet } = require("react-native");

const styles = StyleSheet.create ({

    headText : {
        paddingTop : 100,
        paddingBottom : 65,
        textAlign:'center',
        fontSize : 30,
        fontWeight : 'semibold',
    },

    form : {
        flex: 1,
        backgroundColor : '#F1FFF3',
        borderTopLeftRadius : 50,
        borderTopRightRadius : 50,
        padding : 30
        
    },

    reset : {
        paddingTop : 60,
        fontSize : 23,
        fontWeight : 600,
        paddingLeft : 34,
    },

    lorem : {
        paddingTop : 15,
        fontSize : 15,
        paddingLeft : 34,
    },

    email : {
        paddingTop : 82,
        paddingLeft : 34,
        // paddingTop : 30,
        fontSize : 20,
        fontWeight : 500,
        marginBottom : 20
    },

    emailPlaceholder : {
        backgroundColor: '#DFF7E2',
        height : 41,
        width : 290,
        borderRadius : 50,
        paddingHorizontal : 20,
        fontSize : 17,
        marginLeft : 30
    },

    buttons : {
        flex : 1,
        alignItems : 'center',
        // justifyContent : 'center',
    },

    nextButton : {
        backgroundColor : '#00D09E',
        width : 170,
        height : 32,
        borderRadius : 50,
        marginTop: 45,
    },

    buttonText : {
        fontSize : 22,
        fontWeight : 600,
        paddingTop : 3,
        textAlign : 'center',
    },

    noAccount : {
        marginTop : 120,
        // paddingTop : 50,
        fontSize : 15
    },

    signUpButton : {
        backgroundColor : '#DFF7E2',
        width : 179,
        height : 32,
        borderRadius : 50,
        marginTop : 18
    },

    errorMessage : {
        color : 'red',
        marginLeft : 50,
        marginTop : 3
    }
})

export default styles;