import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
  } from 'react-native';
  import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Panel extends Component {
  render() {
    return (
    <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Container>
            <Content>
                <Text style={styles.title1}>Painel de gerencia</Text>
                <Grid style={styles.grids}>
                    <Row size={2}>
                        <Col style={styles.colum}>
                            <Button light style={styles.btnBox} onPress={() => this.props.navigation.navigate('Buscar')}>
                                <View style={styles.iconCenter} >
                                    <Image
                                        style={{width: 60, height: 60}} 
                                        source={require('../assets/images/tiny_logo.png')} />
                                        <Text style={styles.btnBoxText}>Buscar Estabelecimento</Text>
                                </View>
                                
                                
                            </Button>
                        </Col>  
                        <Col style={styles.colum}>
                            <Button light style={styles.btnBox} onPress={() => this.props.navigation.navigate('Cadastrar')}>
                                <View style={styles.iconCenter} >
                                    <Image
                                        style={{width: 60, height: 60}} 
                                        source={require('../assets/images/tiny_logo.png')} />
                                        <Text style={styles.btnBoxText}>Cadastrar Estabelecimento</Text>
                                </View>
                            </Button>
                        </Col>
                    </Row>
                    
                </Grid>
            </Content> 
        </Container>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    grids:{
        padding: 20,
        paddingLeft: 30
    },
    colum:{
        alignItems: 'center',
    },
    marginTop1:{
        marginTop: 20
    },  
    title1:{
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        color: '#34495e'
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
    iconCenter:{
        width: '100%',
        alignItems: 'center',
    }
  
});