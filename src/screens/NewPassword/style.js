const { StyleSheet } = require("react-native");

const styles = StyleSheet.create ({
    head : {
        // marginTop : 100,
        // marginLeft : 65,
        padding : 100,
        fontSize : 30,
        fontWeight : 'semibold'
    },

    form : {
        flex : 1,
        borderTopLeftRadius : 50,
        borderTopRightRadius : 50,
        backgroundColor : '#F1FFF3',
        paddingTop : 89,
        paddingLeft : 36
    },

    new : {
        fontSize : 15,
        fontWeight : 'medium'
    },

    confirm : {
        fontSize : 15,
        fontWeight : 'medium',
        marginTop : 41
    },

    information : {
        backgroundColor : '#DFF7E2',
        width : 330,
        height : 41,
        marginTop : 7,
        // marginBottom : 41,
        borderRadius : 18,
        paddingLeft : 21,
        paddingBottom : 5,
        fontSize : 21,
        fontWeight : 'regular'
    },

    button : {
        marginTop : 140,
        backgroundColor : '#00D09E',
        width : 330,
        height : 45,
        borderRadius : 50,
    },

    buttonText : {
        textAlign : 'center',
        paddingTop : 10,
        fontSize : 20,
        fontWeight : 500
    },

    errorMessage : {
        color : 'red',
        marginTop : 5
    }
})

export default styles;