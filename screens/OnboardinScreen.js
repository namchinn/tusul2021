import React from 'react';
import Login from './Login';
import Asuult1 from './Asuult1';
import {
    StyleSheet,
    Image,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
        titleStyles={{fontWeight:'bold', color:'#3084F2'}}
        subTitleStyles={{color:'#5096F2'}}
            // DoneButtonComponent={()=> navigation.navigate('Login')}
            onDone={() => navigation.navigate('Asuult1')}
            onSkip={() => navigation.navigate('Asuult1')}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.image} source={require('../android/assets/waterDrop.png')} />,
                    title: 'Эрүүл бай',
                    subtitle: 'Монгол хүн та өдөр тутамдаа ус ууж хэвшээрэй',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image style={styles.image} source={require('../android/assets/water.png')} />,
                    title: 'Өөртөө үнэнч бай',
                    subtitle: 'Өөрийн эрүүл мэнддээ анхаарч мэдэгдэл ирэх бүрт үнэнчээр усаа уугаарай',
                },

            ]}
        />

    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    }
})

export default OnboardingScreen;