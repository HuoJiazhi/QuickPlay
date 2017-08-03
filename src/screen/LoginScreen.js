import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Button from 'apsl-react-native-button';
import styles from '../styles/LoginScreenStyle';
import { TextInputLayout } from 'rn-textinputlayout';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// this is a traditional React component connected to the redux store
class LoginScreen extends Component {
    static navigatorStyle = {
        navBarHidden: true
    };

    constructor(props) {
        super(props);
        this.state = {
            username: 'administration01',
            password: 'Welcome1',
            errorMessage: undefined,
            popupShowed: false
        };
    }

    performLogin() {
        alert(this.state.username+","+ this.state.password);
        //this.props.dispatch(appActions.login(this.state.username, this.state.password));
        //this.props.logIn(this.state.username, this.state.password);
    }
    handleFingerprintShowed(){
        this.setState({
            popupShowed: true
        });
        alert("输入指纹");
    }

    render() {
        const {loading} = this.props;
        return (
            <View style={ styles.loginView }>
                <Image
                    source={ require('../../img/bg01.jpg') }
                    style={ styles.backgroundImage }>
                    <View>
                        <Text style={ styles.text }>
                            登录
                        </Text>
                        <TextInputLayout
                            style={ styles.inputLayout }
                            checkValid={ t => EMAIL_REGEX.test(t) }>
                            <TextInput
                                style={ styles.textInput }
                                placeholder={ '用户名' }
                                onChangeText={ (username) => this.setState({
                                    username
                                }) }
                                value={ this.state.username } />
                        </TextInputLayout>
                        <TextInputLayout style={ styles.inputLayout }>
                            <TextInput
                                style={ styles.textInput }
                                placeholder={ '密码' }
                                secureTextEntry={ true }
                                onChangeText={ (password) => this.setState({
                                    password
                                }) }
                                value={ this.state.password }
                                ref="password" />
                        </TextInputLayout>
                    </View>
                    <View style={ styles.alignCenter }>
                        <Button
                            isLoading={ loading }
                            style={ styles.buttonContainer }
                            textStyle={ styles.textStyle6 }
                            onPress={ this.performLogin.bind(this) }>
                            登录
                        </Button>
                        <TouchableOpacity
                            style={ styles.fingerprint }
                            onPress={ this.handleFingerprintShowed.bind(this) }
                            disabled={ Boolean(this.state.errorMessage) }>
                            <Image source={ require('../../img/finger_print.png') } />
                        </TouchableOpacity>
                        { this.state.errorMessage && (
                            <Text style={ styles.errorMessage }>
                                { this.state.errorMessage }
                            </Text>
                        ) }
                    </View>
                </Image>
            </View>
        );
    }
}
export default LoginScreen;
