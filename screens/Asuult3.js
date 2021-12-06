import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    StyleSheet,
    View,
    Text,
    Button,
    TextInput,
    Image,
} from 'react-native';



function App({ navigation, route }) {
    const { id } = route.params;
    const { untdagTsag } = route.params;
    //console.warn(id, untdagTsag);
    const [jin, setJin] = useState('');

    const setData = async () => {
        try {
            await AsyncStorage.setItem('Jin', jin);

            navigation.navigate('Asuult4', { jin: jin, serdegTsag: id, untdagTsag: untdagTsag });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', color: '#3084F2', fontSize: 25, marginBottom: 40 }}>Таны жин хэд вэ?</Text>
            <View style={styles.container2}>
                <TextInput
                    style={styles.input}
                    placeholder='75'
                    onChangeText={(value) => setJin(value)}
                    keyboardType='numeric'
                />
                <Image style={{ width: 50, height: 50, marginBottom: 10 }} source={require('../android/assets/scale.png')} />

            </View>
            <Button
                title='Дараагийн асуулт'
                onPress={setData}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container2: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        marginBottom: 25,

    },
    input: {
        fontSize: 25,
        width: 100,
        height: 50,
        borderWidth: 1,
        borderColor: '#555',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginRight: 25,
    },
})
export default App;
