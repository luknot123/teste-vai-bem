import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, List,Button,ListItem,Left,Right,Thumbnail,Body } from 'native-base';
import {
    // SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    // StatusBar,
    // Image,
    TextInput,
    Modal,
    Alert
  } from 'react-native';
// import { Col, Row, Grid } from 'react-native-easy-grid';
// import { StackActions } from '@react-navigation/native';
import {buscar} from './Service';

export default class Buscar extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemstorender: [],
            modalVisible: false,
            listEstabelecimentos:[],
            endereco:''
        }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    componentDidMount() {
        console.log("MARILENE");
        // this.renderData();
    }
    renderData = (data) => {
        for(var i = 0; i<data.length; i++){
            this.setState({
                itemstorender: this.state.itemstorender.concat([
                    <ListItem thumbnail key={data[i].id}>
                        <Left>
                            <Thumbnail square source={{ uri: '../assets/images/pay.png' }} />
                        </Left>
                        <Body>
                            <Text>{data[i].nome}</Text>
                            <Text note numberOfLines={1}>{data[i].descricao}</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>Atualizar</Text>
                            </Button>
                            <Button transparent>
                                <Text>Remover</Text>
                            </Button>
                        </Right>
                    </ListItem>
                ])
            })
            
        }
    }
    setValue(name,value){
        this.state[name]=value;
    }
    handleSignInPress = async () => {
        console.log(this.state.endereco);
        buscar({endereco:this.state.endereco}).then(res => {
            console.log("Busca aq marilene");
            console.log(res);
            this.state.listEstabelecimentos = res;
            this.renderData(this.state.listEstabelecimentos);
            // this.setModalVisible(true);
        });
        
        
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
                                <Input style={styles.input} placeholder="Digite o endereço"
                                onChangeText={text => this.setValue('endereco', text)}/>
                            </Item>                
                        </Form>
                            
                        <Button success block style={styles.cadastrar}
                                onPress={this.handleSignInPress}><Text style={styles.cadastrarText}>Buscar</Text></Button>
                        <List>
                            { this.state.itemstorender }
                        </List>
                    </Content>
                </Container>
                
            </View>
            {/* <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}
            >
            <View style={{marginTop: 22}}>
                <View>
                    <Text style={styles.title2}>
                        Lista de estabelecimentos {this.state.listEstabelecimentos.length}
                    </Text>

                    <List>
                        {
                            this.state.listEstabelecimentos.forEach(item => {
                                <ListItem thumbnail>
                                    <Left>
                                        <Thumbnail square source={{ uri: '../assets/images/pay.png' }} />
                                    </Left>
                                    <Body>
                                        <Text>{item.nome}</Text>
                                        <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                    </Body>
                                    <Right>
                                        <Button transparent>
                                        <Text>View</Text>
                                        </Button>
                                    </Right>
                                </ListItem>
                            })
                        }
                    </List>
                    <Button success block style={styles.cadastrar}
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                        <Text style={styles.cadastrarText}>Confirmar</Text>
                    </Button>

                </View>
            </View>
            </Modal> */}
        </ScrollView>
        );
    }

    componentWillUnmount(){
    // Orientation.lockToPortrait();
    }
  
}

const styles = StyleSheet.create({
    title2:{
        color: '#08775a',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'
    },
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
        backgroundColor: '#ddd'
    },
    cadastrarText:{
        color: '#08775a',
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