import React from 'react';
import { AppRegistry ,StyleSheet, Text, View, Image, Dimensions, ScrollView, FlatList, TouchableOpacity, borderColor, borderRadius, marginBotton, TextInput, } from 'react-native';

const width = Dimensions.get('screen').width;

export default class Login extends React.Component {

    render() {
        return (
            <View style={styles.container}>



                <TextInput placeholder="Usuário..."
                
                    onChangeText={texto => this.setState({usuario: texto})}/>


                

                <TextInput placeholder="Senha..."
                
                onChangeText={texto => this.setState({senha: texto})}/>    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
})


AppRegistry.registerComponent('teste2', () => teste2);
