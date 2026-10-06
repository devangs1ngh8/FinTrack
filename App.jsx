import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import  RootStackNavigator  from './src/navigation/RootStackNavigator'


class App extends Component {
    render() {
        return (
            <NavigationContainer>

                <RootStackNavigator/>

            </NavigationContainer>
        );
    }
}

export default App;