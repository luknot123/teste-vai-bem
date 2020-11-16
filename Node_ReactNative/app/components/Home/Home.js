import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Login from '../Login/Login'

export default class Home extends Component {
    
    render() {
      return (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Login/>
    
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
});