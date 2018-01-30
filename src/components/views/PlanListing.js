import React, { Component } from 'react';
import {
    View,
    Image,
    TextInput,
    Text,
    Button,
    StyleSheet,
    StatusBar,
    Linking,
    TouchableOpacity,
    ScrollView
} from 'react-native';


import {StyledButton} from '../presentation/StyledButton';
import { NavigationActions } from 'react-navigation';
import {Colors} from '../../data/Styles';

export class PlanListing extends Component {

    constructor(props) {

        super(props) ;

        this.state = {

        };

    }
    static navigationOptions = {
        title: 'Choose Plan',
        headerVisible : false
    };

    render() {

        return (
            <View style={{width:'100%',height:'100%',justifyContent : 'flex-start'}}>
                <Image source={require('../../images/beerbg.jpg') }
                       resizeMode="cover"
                       style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}/>




                <ScrollView style={{position:'absolute', top: 0, left:0,right:0, bottom: 0}}>
                    <View style={{height: 30}} />

                </ScrollView>



            </View>
        );
    }
}


const styles = StyleSheet.create({
    myInput : {
        height : 50,
        width : '100%',
        backgroundColor : 'rgba(0,0,0,.3)',
        color: '#fff',
        marginBottom : 20
    }
});