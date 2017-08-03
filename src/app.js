import {Navigation, NativeEventsReceiver} from 'react-native-navigation';
import {registerScreens} from "./screen";
import LoginScreen from './screen/LoginScreen';
Promise.resolve(Navigation.isAppLaunched())
    .then(appLaunched => {
        if (appLaunched) {
            startApp(); // App is launched -> show UI
        } else {
            new NativeEventsReceiver().appLaunched(startApp); // App hasn't been launched yet -> show the UI only when needed.
        }
    });

function startApp() {
    registerScreens();
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'demo.LoginScreen',
            title: 'Login',
            navigatorStyle: {}
        }
    });
    return;
}
