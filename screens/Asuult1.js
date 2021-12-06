import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Pressable,
    Image
} from 'react-native';

function App({ navigation }) {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const [wakeTimeUse, setWakeTimeUse] = useState(null);

    const onChange = async (event, selectedDate) => {
        const currenDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currenDate);

        let tempDate = new Date(currenDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = 'Hours: ' + tempDate.getHours() + ' | Minute: ' + tempDate.getMinutes();
        var wakeTime = tempDate.getHours();
        setText(fDate + '\n' + fTime);
        //Bosdog  tsagiig wakeTimeUse -d utgalaw
        setWakeTimeUse(wakeTime);

        try {
            await AsyncStorage.setItem('BosdogTsag', JSON.stringify(wakeTimeUse));

        } catch (error) {
            console.log(error);
        }


        console.log(fDate + '(' + fTime + ')');
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold', color: '#3084F2', fontSize: 25, marginBottom: 40, alignItems:'center', justifyContent: 'center' }}>
                Та хэдэн цагт босдог вэ?</Text>
            {/* <Text>{text}</Text>
            <Text>{wakeTimeUse}</Text> */}
            {/* <Button
                title='Date Picker'
                onPress={() => showMode('date')}
            />
            <Button
                title='Time Picker'
                onPress={() => showMode('time')}
            /> */}
            <Pressable
                onPress={() => showMode('time')}
            >
                <Image style={{ width: 150, height: 150, marginBottom: 50 }} source={require('../android/assets/clock.png')} />
            </Pressable>
            <Button
                title='Дараагийн асуулт'
                onPress={() => navigation.navigate('Asuult2',{id:wakeTimeUse})}
            />

            {show && (
                <DateTimePicker
                    testId='dateTimePicker'
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display='default'
                    onChange={onChange}
                    
                />
            )}

        </View>
    )
}
export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -40,
    }
})

