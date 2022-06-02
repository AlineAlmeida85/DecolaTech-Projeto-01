import React from 'react';
import {View, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Text,
    Pressable,
    Linking
} from 'react-native';


const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/99259131?v=4';
const colorFontGithub = '#c9d1d9';
const colorFontDarkGithub = '#4f565e';
const urlToMyGithub = 'https://github.com/AlineAlmeida85';


const App = () => {

    const handlePressGoToHithub = async () => {
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res){
            await Linking.openURL(urlToMyGithub);
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle= 'dark-content'/>
            <View style={style.content}>
                <Image 
                    accessibilityLabel='Aline'
                    style={style.avatar} 
                    source={{uri: imageProfileGithub}}
                />
                <Text 
                    accessibilityLabel='Nome: Aline Melissa Andrade de Almeida'
                    style={[style.defaultText, style.name]}>
                    Aline Melissa Andrade de Almeida
                </Text>
                <Text 
                    accessibilityLabel='nickname: AlineAlmeida85'
                    style={[style.defaultText, style.nickName]}>
                    AlineAlmeida85
                </Text>
                <Text 
                    accessibilityLabel='Email: aasouza20@hotmail.com'
                    style={[style.defaultText, style.description]}>
                    aasouza20@hotmail.com
                </Text>
                <Pressable onPress={handlePressGoToHithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
                    </View>
                </Pressable>
            </View> 
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container:{
        backgroundColor: colorGithub,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
     },

     content: {
         alignItems: 'center',
         padding: 20,
     },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'White',
        borderWidth: 2,
    },

    defaultText: {
        color: colorFontGithub,
    },

    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    nickName: {
        fontSize: 18,
        color: colorFontDarkGithub,
    },

    description: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    button: {
        marginTop: 20,
        backgroundColor: colorFontDarkGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});