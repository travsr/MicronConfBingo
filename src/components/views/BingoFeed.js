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
    WebView
} from 'react-native';

import {StyledButton} from '../presentation/StyledButton';
import { NavigationActions } from 'react-navigation';
import {Colors} from '../../data/Styles';


export class BingoFeed extends Component {
    constructor(props) {
        super(props) ;

        this.state = {
            username : "",
            password : "",
            screen : 0,
            text : "test"
        };

    }
    static navigationOptions = {
        title: 'Feed' ,
        headerVisible : false
    };

    continue() {

        //this.props.navigation.navigate('MainTabs');
        this.props.navigation.navigate("Onboard1");

    }

    render() {

        return (
            <View style={{width:'100%',height:'100%',justifyContent : 'center'}}>
                <Image source={require('../../images/office.jpg') }
                       resizeMode="cover"
                       style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}/>




                {/*<WebView*/}
                    {/*source={{uri: 'https://www.joshmorony.com/games/gem-matching.html'}}*/}
                    {/*style={{width:'100%',height:'100%'}}*/}
                {/*/>*/}
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