import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Header, Content, Form, Item, Input, Label,Button, Toast} from 'native-base';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
  } from 'react-native';
import { StackActions } from '@react-navigation/native';
import {login,getProfile} from './Service';
// import allReducers from '../reducers/index.js';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import LoginForm from './LoginForm.js';
// import { Field, reduxForm } from 'redux-form';
// const store = createStore(allReducers);

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={ email: '', password: '', error: '' };
    }
    handleEmailChange = (email) => {
        this.setState({ email });
    };
    
    handlePasswordChange = (password) => {
        this.setState({ password });
    };
    
   
    render() {
        return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View>
                <Container>
                    <Content>
                        <View style={styles.logo}> 
                            <Image
                                style={{width: 200, height: 168}} 
                                source={require('../assets/images/tiny_logo.png')} />

                            <Text style={styles.title1}>Gerencie seus negócios</Text>
                            <Text style={styles.title2}>Acesse</Text>
                        </View>
                        {/* <Provider store= {store}>
                            <LoginForm />
                        </Provider> */}
                        <Form>
                            <Item style={styles.item}>
                                <Input style={styles.input}
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChangeText={this.handleEmailChange}
                                    autoCapitalize="none"
                                    autoCorrect={false}/>
                            </Item>
                            <Item style={styles.item}>
                                <Input style={styles.input} 
                                placeholder="Senha"
                                value={this.state.password}
                                onChangeText={this.handlePasswordChange}
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry/>
                            </Item>
                        </Form>
                        <Button onPress={this.handleSignInPress} success block style={styles.entrar}><Text style={styles.entrarText}>Entrar</Text></Button>
                    </Content>
                    
                </Container>
            </View>
        </ScrollView>
        );
    }

    handleSignInPress = async () => {
        // this.props.navigation.dispatch(StackActions.replace('Panel'));
        if (this.state.email.length === 0 || this.state.password.length === 0) {
          this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
          Toast.show({
            text: 'Preencha usuário e senha para continuar!',
            buttonText: 'Certo!'
          });
        
        } else {
          try {
            const user = {
                usuario: this.state.email,
                senha: this.state.password
            }
            login(user).then(res => {
                console.log("RESULT AQ MARILENE");
                console.log(res);
                if(res.auth){
                    AsyncStorage.setItem('@AuthApp:token', res.token);
                    this.props.navigation.dispatch(StackActions.replace('Panel'));
                    Toast.show({
                        text: "Bem vindo!",
                        duration: 3000
                    });
                }
                else{
                    Toast.show({
                        text: res.message,
                        buttonText: 'Certo!',
                        duration: 3000
                    });
                }
            });
            // const resetAction = StackActions.reset({
            //   index: 0,
            //   actions: [
            //     NavigationActions.navigate({ routeName: 'Main' }),
            //   ],
            // });
            // this.props.navigation.dispatch(resetAction);
          } catch (_err) {
            this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' });
          }
        }
    };
   
}

const styles = StyleSheet.create({
    input:{
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#DEE1E6',
        paddingLeft: 10,
        marginTop: 10
    },
    item:{
        marginRight: 12,
    },
    title1:{
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    title2:{
        marginTop: 15,
        fontSize: 25,
        textAlign: 'center'
    },
    entrar:{
        marginTop: 15,
        marginRight: 14,
        marginLeft: 14,
        marginBottom: 5,
        backgroundColor: '#00b386'
    },
    cadastrar:{
        marginTop: 8,
        marginRight: 14,
        marginLeft: 14,
        marginBottom: 5,
        backgroundColor: '#ddd'
    },
    cadastrarText:{
        color: '#08775a',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    entrarText:{
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase'
    },
    esqueciSenha:{
        textAlign: 'right',
        paddingTop: 10,
        paddingBottom: 10,
        marginRight: 14,
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: "underline"
    },
    logo:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    }
});