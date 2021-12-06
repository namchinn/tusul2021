import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    Button,
    Alert
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification from "react-native-push-notification";






export default function Login({ navigation }) {

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    useEffect(() => {
        createChannels();
    }, []);


    const setData = async () => {
        if (name.length == 0 && pass.length == 0) {
            Alert.alert('Warning!', 'Please fill the all fields');
        } else {
            try {
                await AsyncStorage.setItem('Username', name);
                await AsyncStorage.setItem('Password', pass);
                navigation.navigate('Home');
                //navigation.navigate('Home');
            } catch (error) {
                console.log(error);
            }
        }
    }

    const createChannels = () => {
        PushNotification.createChannel(
            {
                channelId: "test-channel",
                channelName: "Test Channel"
            }
        )
    }

    return (
        <View style={styles.body}>
            <Image
                style={styles.logo}
                source={require('../android/assets/waterDrop.png')}
            />
            <Text style={styles.text}>
                Water Reminder
            </Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                onChangeText={(value) => setName(value)}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter your password'
                onChangeText={(value) => setPass(value)}
                keyboardType='numeric'

            />
            <Button
                title='Login'
                color='#1eb900'
                onPress={setData}
            ></Button>

        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#0080ff',
        alignItems: 'center',
    },
    logo: {
        marginTop: 50,
        width: 100,
        height: 100,
        margin: 20,
    },
    text: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 110,
        justifyContent: 'center',
    },
    input: {
        fontSize: 20,
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: '#fff',
    },

})