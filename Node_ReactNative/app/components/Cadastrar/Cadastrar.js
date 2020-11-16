import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Button,Toast } from 'native-base';
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
import { Col, Row, Grid } from 'react-native-easy-grid';
import {cadastrar} from './Service';


export default class Cadastrar extends Component {
    constructor(props){
        super(props);
        this.state={ 
            nome: '',
            descricao: '',
            endereco: '',
            bairro: '',
            cidade: '',
            telefone: ''};
    }

    

    handleSignInPress = async () => {
        console.log(this.state);
        let data = this.state;
        cadastrar(data).then(res => {
            console.log("Retorno Data MARILENE");
            if(res.success){
                this.props.navigation.dispatch(StackActions.pop());
                Toast.show({
                    text: "Cadastro realizado com sucesso!",
                    duration: 3000
                });
            }else{
                Toast.show({
                    text: "Verifica os dados corretamente.",
                    duration: 3000
                });
            }
            console.log(res);
        });
    };
    setValue(name,value){
        this.state[name]=value;
    }
    render() {
    return (
    <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View>
            <Container>
                <Content>
                    <Form>
                        <Item style={styles.item}>
                            <Input style={styles.input}
                            placeholder={'Nome do estabelecimento'}
                            onChangeText={text => this.setValue('nome', text)}
                            />
                        </Item>
                        <Item style={styles.item}>
                            <Input style={styles.input}
                            placeholder={'Descrição'}
                            onChangeText={text => this.setValue('descricao', text)}
                            />
                        </Item>
                        <Item style={styles.item}>
                            <Input style={styles.input}
                            placeholder={'Endereço'}
                            onChangeText={text => this.setValue('endereco', text)}
                            />
                        </Item>
                        <Item style={styles.item}>
                            <Input style={styles.input}
                            placeholder={'Bairro'}
                            onChangeText={text => this.setValue('bairro', text)}
                            />
                        </Item>
                        <Item style={styles.item}>
                            <Input style={styles.input}
                            placeholder={'Cidade'}
                            onChangeText={text => this.setValue('cidade', text)}
                            />
                        </Item>
                        <Item style={styles.item}>
                            <Input style={styles.input}
                            placeholder={'Telefone'}
                            onChangeText={text => this.setValue('telefone', text)}
                            />
                        </Item>             
                    </Form>
                        
                    <Button success block style={styles.cadastrar}
                           onPress={this.handleSignInPress} ><Text style={styles.cadastrarText}>Cadastrar</Text></Button>
                    
                </Content>
                
            </Container>
        </View>
    </ScrollView>
    );
    }
   
}

const styles = StyleSheet.create({
    marginTop20:{
        marginTop: 20
    },
    marginTop15:{
        marginTop: 15
    },
    grids:{
        padding: 10
    },
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
    emergencia:{
        marginTop: 8,
        marginRight: 14,
        marginLeft: 14,
        marginBottom: 5,
        backgroundColor: 'red',
        borderStyle: "solid",
        borderWidth: 3,
        borderColor: '#34495e',
        borderRadius: 5
    },
    cadastrar:{
        marginTop: 8,
        marginRight: 14,
        marginLeft: 14,
        marginBottom: 5,
        color: '#fff',
        backgroundColor: '#5db5ad',
    },
    cadastrarText:{
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    emergenciaText:{
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    btnBoxText:{
        textAlign: 'center',
        padding: 10,
        fontSize: 18,
        color: '#fff',
        textAlignVertical: "center",
        fontWeight: 'bold',
        width: '100%',
     
    },
    btnBox:{
        textAlign: 'center',
        width: 170,
        height: 150,
        backgroundColor: '#5db5ad',
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: '#34495e',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    colum:{
        alignItems: 'center',
    },
    iconCenter:{
        width: '100%',
        alignItems: 'center',
    }
});