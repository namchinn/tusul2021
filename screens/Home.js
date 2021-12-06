
import React, { useEffect, useState } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Pressable,
    TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification from "react-native-push-notification";
//import CircularProgress from 'react-native-circular-progress-indicator';



export default function Home({ navigation, route }) {


    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    useEffect(() => {
        getData();
    }, []);


    const getData = () => {
        try {
            AsyncStorage.getItem('Username').then(value => {
                if (value != 0) {
                    setName(value);
                }
            })
            AsyncStorage.getItem('Password').then(value => {
                if (value != 0) {
                    setPass(value);
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleNotification = () => {
        PushNotification.localNotification({
            channelId: "test-channel",
            title: "My first react native notification",
            message: "Congratulations mate!"
        })
    }

    return (
        <View style={styles.body}>
            {/* <CircularProgress
                value={60}
                radius={120}
                duration={2000}
                textColor={'#ecf0f1'}
                maxValue={200}
                title={'KM/H'}
                titleColor={'white'}
                titleStyle={{ fontWeight: 'bold' }}
            /> */}
            <Text style={styles.text}>
                Welcome {name}
            </Text>
            <TouchableOpacity
                onPress={() => { handleNotification() }}
            >
                <Text style={styles.text}>
                    Your password is {pass}
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
    }
})