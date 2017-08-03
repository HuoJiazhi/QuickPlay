/**
 * Created by I337523 on 8/2/2017.
 */
import { Navigation } from 'react-native-navigation';
import LoginScreen from './LoginScreen';

export function registerScreens() {
    Navigation.registerComponent('demo.LoginScreen', () => LoginScreen);
}