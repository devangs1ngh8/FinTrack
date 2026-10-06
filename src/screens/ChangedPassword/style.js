const { StyleSheet } = require("react-native");

const styles = StyleSheet.create ({

    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#00D09E'
    },

    image : {
        borderRadius : '50%',
        marginBottom : 32,
    },

    text1 : {
        paddingBottom : 5,
        color : 'white',
        fontSize : 20,
        fontWeight : 600
    },
})

export default styles;