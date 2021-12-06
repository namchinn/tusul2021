import React, { useState, useEffect } from 'react';
import { LineChart } from 'react-native-chart-kit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    StyleSheet,
    Text,
    Button,
    Image,
    Pressable,
    ViewBase,
    Dimensions,
    FlatList,
} from 'react-native';


function App({ navigation, route }) {

    const [tuuh2, setTuuh2] = useState([]);

    const [tuuh, setTuuh] = useState([
        { date: 'DD/MM/YYYY', us: '****' },
    ]);
    const [tuuhNew, setTuuhNew] = useState([
        { date: 'DD/MM/YYYY', us: '****' },
    ]);

    const [odor, setOdor] = useState('');
    const [usTuuh, setUsTuuh] = useState(0);
    //console.warn(odor, usTuuh);

    const utguudaaAwah = async () => {
        try {
            const value1 = await AsyncStorage.getItem('odor');
            //console.warn('value1'+value1);
            setOdor(JSON.parse(value1));
            const value2 = await AsyncStorage.getItem('uusanTuuh');
            setUsTuuh(JSON.parse(value2));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        utguudaaAwah();
        //findTuuh();
        //tuuhHadgalah();
    });
    
    const findTuuh = async () => {
        const result = await AsyncStorage.getItem('tuuhh');
        console.log(result);
        setTuuhNew(JSON.parse(result));
    }
    

    const tuuhHadgalah = async () => {
        //setTuuh([...tuuh, { date: odor, us: usTuuh }]);
        //console.warn(tuuh);
        try {
            //setTuuh([...tuuh, { date: odor, us: usTuuh }]);
            const turTuuh = {date: odor, us: usTuuh};
            const updatedTuuh = [...tuuh2, turTuuh];
            setTuuh2(updatedTuuh);
            await AsyncStorage.setItem('tuuhh', JSON.stringify(updatedTuuh));
        } catch (error) {
            console.log(error)
        }
    }

    const tuuhAwah = async () => {
        try {
            const value = await AsyncStorage.getItem('tuuhh');
            setTuuhNew(JSON.parse(value));
            console.warn(tuuhNew);
        } catch (error) {
            console.log(error);
        }
    }


    const newItem = () => {
        tuuhHadgalah();
        findTuuh();
        //tuuhAwah();
    }



    return (

        <View style={styles.container}>
            <FlatList
                //inverted
                keyExtractor={(item, index) => index.toString()}
                data={tuuh2}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{item.date}   {item.us}</Text>
                    </View>
                )}

            />
            <Button
                disabled={false}
                title='new item'
                onPress={newItem}
            />
        </View>

        // <View>
        //     <Text style={styles.text}>Уусан усны түүх</Text>
        //     <LineChart
        //         data={{
        //             labels: ["January", "February", "March", "April", "May", "June"],
        //             datasets: [
        //                 {
        //                     data: [
        //                         Math.floor(Math.random() * 1000),
        //                         Math.floor(Math.random() * 1000),
        //                         Math.floor(Math.random() * 1000),
        //                         Math.floor(Math.random() * 1000),
        //                         Math.floor(Math.random() * 1000),
        //                         Math.floor(Math.random() * 1000)
        //                     ]
        //                 }
        //             ]
        //         }}
        //         width={Dimensions.get("window").width} // from react-native
        //         height={Dimensions.get('window').height-200}
        //         yAxisLabel=""
        //         yAxisSuffix="мл"
        //         yAxisInterval={1} // optional, defaults to 1
        //         chartConfig={{
        //             backgroundColor: "#5CA2DB",
        //             backgroundGradientFrom: "#72B4F2",
        //             backgroundGradientTo: "#6BBFFF",
        //             decimalPlaces: 2, // optional, defaults to 2dp
        //             color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        //             labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        //             style: {
        //                 borderRadius: 16
        //             },
        //             propsForDots: {
        //                 r: "6",
        //                 strokeWidth: "2",
        //                 stroke: "#192E45"
        //             }
        //         }}
        //         bezier
        //         style={{
        //             marginVertical: 8,
        //             borderRadius: 16
        //         }}
        //     />
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 35,
        color: '#fff',

    },
    item: {
        backgroundColor: "#6BBFFF",
        alignItems: 'center',
        margin: 10,
    }
})

export default App;