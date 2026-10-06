const { StyleSheet } = require("react-native");

const styles = StyleSheet.create ({
    tabBarStyle : {
        flex : 1,
        position : 'absolute',
        borderRadius : 55,
        backgroundColor : '#DFF7E2',
        height : 75,
        // paddingVertical : 20,
        alignItems : 'center',
        paddingTop : 20,
        paddingHorizontal : 25,
        alignSelf : 'center'
    },

    iconContainer : {
        width : 55,
        height : 55,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 20,
        // marginTop : 40,
    },

    activeIcon : {
        backgroundColor : '#00D09E'
    },

    icon : {
        width : 32,
        height : 32,
    },

})

export default styles;