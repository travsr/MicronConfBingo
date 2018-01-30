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


export class PlanSettings extends Component {

    constructor(props) {

        super(props) ;

        this.state = {

        };

        this.goToPlanListings = this.goToPlanListings.bind(this);

    }
    static navigationOptions = {
        title: 'Settings' ,
        headerVisible : false
    };




    goToPlanListings() {
        this.props.navigation.navigate("PListing");
    }

    render() {

        return (
            <View style={{width:'100%',height:'100%',justifyContent : 'flex-start'}}>
                <Image source={require('../../images/beerbg.jpg') }
                       resizeMode="cover"
                       style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}/>



                <View style={{height: 30}} />
                <StyledButton title="Manage Plans" onPress={this.goToPlanListings} style={{width: '100%', height : 58,backgroundColor: Colors.accent2,
                    borderRadius : 6}}/>





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