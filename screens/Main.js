import React, { useEffect, useState, Component } from 'react';
import BackgroundTimer from 'react-native-background-timer';
import * as Progress from 'react-native-progress';
import PushNotification from 'react-native-push-notification';
//import BackgroundTask from 'react-native-background-task';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    StyleSheet,
    Text,
    Button,
    Image,
    Pressable,
} from 'react-native';

// BackgroundTask.define(() => {
//     console.warn('Hi there from background task');
//     console.log('It is background task');
//     BackgroundTask.finish();
// })


function App({ navigation, route }) {

    const [hemjee, setHemjee] = useState(0);
    const [currentDate, setCurrentDate] = useState('');
    // const [tuuh, setTuuh] = useState([
    //     { date: 'DD/MM/YYYY', us: '****' },
    // ]);

    const JinAwah = async () => {
        const value = await AsyncStorage.getItem("Jin");
        setHemjee(value);
    }
    const odorAwah = async () => {
        var day = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        setCurrentDate(day + '/' + month + '/' + year);
        try {
            await AsyncStorage.setItem('odor', JSON.stringify(currentDate));
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {

        JinAwah();
        appEhlehedProgressAwah();
        appEhlehedUusanUsAwah();
        //progressAwah();
        odorAwah();
    });

    const appEhlehedUusanUsAwah = async () => {
        try {
            const value = await AsyncStorage.getItem('uusanUs');
            setShineUusanUs(JSON.parse(value));
            setUusanUs(JSON.parse(value));
        } catch (error) {
            console.error(error);
        }
    }

    const appEhlehedProgressAwah = async () => {
        try {
            const value = await AsyncStorage.getItem('progress');
            //value = JSON.parse(value);
            setProgressBarYwts2(JSON.parse(value));
            setProgressBarYwts(JSON.parse(value));

        } catch (error) {
            console.error(error);
        }
    }

    // useEffect( async () => {
    //     const value = await AsyncStorage.getItem("Jin");
    //     setHemjee(value);
    // }, []);



    //     useEffect(() => {
    //         createChannels();
    //         CronJob.startCronJob(serdegTsag,0);
    //         CronJob.startCronJob(new Date().getHours, new Date().getMinutes+1);
    //     }, []);

    // BackgroundTimer.runBackgroundTimer(() => {
    //     setUusanUs(0);
    //     setProgressBarYwts(0.0);
    //     console.warn('Resetted');
    // },
    // 10000);
    // BackgroundTimer.stopBackgroundTimer();


    //const { serdegTsag } = route.params;
    //const { untdagTsag } = route.params;
    //const { hemjee } = route.params;
    //const { huis } = route.params;
    const newHemjee = Math.floor(hemjee * 0.035 * 1000);
    const negUdaagiinUuhUsniiHemjee = Math.floor(newHemjee / 8);
    const [progressBarYwts, setProgressBarYwts] = useState(0.0);
    const [progressBarYwts2, setProgressBarYwts2] = useState(0.0);
    const [uusanUs, setUusanUs] = useState(0);
    const [shineUusanUs, setShineUusanUs] = useState(0);
    //const [progressAsync, setProgressAsync] = useState(0.0);
    //var progressBarYwts = 0.1;
    //console.warn(hemjee, serdegTsag, untdagTsag, huis);



    // const createChannels = () => {
    //     PushNotification.createChannel(
    //         {
    //             channelId: "test-channel",
    //             channelName: "Test Channel"
    //         }

    //     )
    // }
    const progressHadgalah = async () => {
        setProgressBarYwts(progressBarYwts + 0.125);
        await AsyncStorage.setItem('progress', JSON.stringify(progressBarYwts + 0.125));
        //console.warn(progressBarYwts);
    }

    const progressAwah = async () => {
        const valuee = await AsyncStorage.getItem('progress');

        setProgressBarYwts2(JSON.parse(valuee));
        //console.warn(valuee);
    }

    const uusanUsHadlagah = async () => {
        setUusanUs(uusanUs + negUdaagiinUuhUsniiHemjee);
        try {
            await AsyncStorage.setItem('uusanUs', JSON.stringify(uusanUs + negUdaagiinUuhUsniiHemjee));
            //console.warn(uusanUs);
        } catch (error) {
            console.error(error);
        }
    }
    const uusanUsAwah = async () => {
        const value = await AsyncStorage.getItem('uusanUs');
        setShineUusanUs(JSON.parse(value));
        
        //console.warn(shineUusanUs);

    }


    const nemeh = async () => {
        // BackgroundTask.schedule();

        //setProgressBarYwts(progressBarYwts + 0.125);
        progressHadgalah();
        progressAwah();



        uusanUsHadlagah();
        uusanUsAwah();
        //AsyncStorage-oor turshij uzew
        //await AsyncStorage.setItem('progress', JSON.stringify(progressBarYwts));

        //const valueProgress = AsyncStorage.getItem('progress');
        // setProgressAsync(parseFloat(valueProgress));
        // console.warn(progressAsync);

        //setUusanUs(uusanUs + negUdaagiinUuhUsniiHemjee);
        //       console.warn(progressBarYwts);
    }
    const zasah = async () => {

        await AsyncStorage.setItem('progress', JSON.stringify(0));
        await AsyncStorage.setItem('uusanUs', JSON.stringify(0));

        setShineUusanUs(0);
        setProgressBarYwts(0.0);
        setUusanUs(0);
        setProgressBarYwts2(0.0);

    }
    const goToHistory = () => {
        navigation.navigate('History');
    }

    const arhiwtHadgalah = async () => {

        
        
        // console.warn(shineUusanUs);
        // setTuuh([...tuuh, {date:currentDate, us:shineUusanUs}]);
        try {
            await AsyncStorage.setItem('uusanTuuh', JSON.stringify(shineUusanUs));
            
        } catch (error) {
            console.log(error);
        }
        //console.warn(currentDate);
        navigation.navigate('History');

    }
    return (
        <View
            style={styles.container}>
            <View style={{ marginTop: -50, width: '100%', alignItems: 'center', height: 570 }}>
                <Pressable style={{ marginLeft: 350 }} onPress={goToHistory}>
                    <Image style={{ width: 40, height: 40 }} source={require('../android/assets/refresh.png')} />
                </Pressable>
                <Image
                    style={{ width: 200, height: 200, marginBottom: 50, marginTop: 80 }}
                    source={require('../android/assets/waterDrop.png')}
                />
                <Text style={styles.text}> {shineUusanUs}/{newHemjee}мл </Text>
                <Progress.Bar style={{ marginBottom: 20, }} progress={progressBarYwts2} width={250} height={10} />
            </View>

            <View style={styles.buttons}>
                <Pressable style={styles.zasah} onPress={zasah}>
                    <Text style={styles.zasahNemeh}>Засах</Text>
                </Pressable>
                <Pressable onPress={nemeh}>
                    <Text style={styles.zasahNemeh}>Ус уусан</Text>
                </Pressable>
            </View>
            <View style={styles.arhiwtHadgalah}>
                <Button

                    color='#3084F2'
                    title='Архивт хадгалах'
                    onPress={arhiwtHadgalah}
                />
            </View>
            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button
                    style={{ marginRight: 50 }}
                    title='Засах'
                    onPress={zasah}
                />
                <Button
                    title='Ус уусан'
                    onPress={nemeh}
                /> 
            </View>*/}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    historyPng: {
        backgroundColor: '#000',
        height: 40,
        width: '100%',
        marginRight: 30,
    },
    text: {
        fontSize: 35,
        color: '#3084F2',
        fontWeight: 'bold',
    },
    buttons: {
        marginTop: -80,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    zasahNemeh: {
        backgroundColor: '#3084F2',
        color: '#fff',
        fontSize: 18,
    },
    zasah: {
        marginRight: 30,
    },
    arhiwtHadgalah: {
        marginTop: 50,
        backgroundColor: '#3084F2'
    }

})
export default App;