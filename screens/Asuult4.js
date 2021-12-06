import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Pressable,
    Image,
} from 'react-native';



function App({ navigation, route }) {
    const { serdegTsag } = route.params;
    const { jin } = route.params;
    const { untdagTsag } = route.params;
    //console.warn(serdegTsag, untdagTsag, jin);
    const [jinn, setJinn] = useState('');
    const [huis, setHuis] = useState('1');
    const [hemjee, setHemjee] = useState(jin);
    
    // const getData = async () => {
    //     const value = await AsyncStorage.getItem('Huis');
    //     setHuis(value);
    // }

    const eregtei = async () => {
        setHuis('1');
        await AsyncStorage.setItem('Huis', huis);
        setHemjee(hemjee);
        navigation.navigate('Main', { serdegTsag: serdegTsag, untdagTsag: untdagTsag, hemjee: hemjee, huis: huis });
    }

    const emegtei = async () => {
        setHuis('2');
        setHemjee(hemjee);
        await AsyncStorage.setItem('Huis', huis);
        navigation.navigate('Main', { serdegTsag: serdegTsag, untdagTsag: untdagTsag, hemjee: hemjee, huis: huis });
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', color: '#3084F2', fontSize: 25, marginBottom: 40 }}>Та хүйсээ тодорхойлно уу</Text>
            <View style={styles.container2}>
                <Pressable
                    style={({ pressed }) => [
                        { backgroundColor: pressed ? '#3084F2' : '#ffffff' }
                    ]}
                    onPress={eregtei}
                >
                    <Image style={{ width: 100, height: 100, marginRight: 20 }} source={require('../android/assets/mongolian.png')} />
                </Pressable>
                <Pressable
                    style={({ pressed, }) => [
                        { backgroundColor: pressed ? '#3084F2' : '#ffffff' }
                    ]}
                    onPress={emegtei}
                >
                    <Image style={{ width: 100, height: 100, marginRight: 20 }} source={require('../android/assets/woman.png')} />
                </Pressable>
            </View>
            {/* <Button
                title='Test'
                onPress={getData}
            />
            <Text>{huis}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginBottom: 25,

    },
})
export default App;