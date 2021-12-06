/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import PushNotification from "react-native-push-notification";
import CronJob from "react-native-cron-job";


PushNotification.configure({
    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);

    },
    requestPermissions: Platform.OS === 'ios'
});



const CronJobTask = async () => {

    // Do your task here.
    PushNotification.createChannel(
        {
            channelId: "test-channel",
            channelName: "Test Channel"
        }
    )
    PushNotification.localNotification({
        channelId: "test-channel",
        title: "Ус сануулагч",
        message: "Таны ус уух цаг боллоо",
        largeIcon: "ic_launcher_adaptive_fore",
        smallIcon: "ic_launcher_adaptive_fore",
        color: '#3084F2',
        
    });
    //console.warn('This is CronJob');

    // Be sure to call completeTask at the end.
    CronJob.completeTask();
};
CronJob.startCronJob(11,0);
CronJob.startCronJob(12,0);
CronJob.startCronJob(13,0);
CronJob.startCronJob(14,0);
CronJob.startCronJob(15,0);
CronJob.startCronJob(16,0);
CronJob.startCronJob(17,0);
CronJob.startCronJob(18,0);




AppRegistry.registerHeadlessTask('CRONJOB', () => CronJobTask);
AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => App);
