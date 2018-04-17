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
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import {Colors} from '../../data/Styles';

import {DataManager} from '../../data/DataManager';

let dataManager = new DataManager();

export class BingoSquare extends Component {
    constructor(props) {
        super(props) ;





        let word = dataManager.model.words[ Math.floor( Math.random() * dataManager.model.words.length )];

        this.state = {

            word : word,
            selected : false
        };

    }

    render() {


        let {width, height} = Dimensions.get('window');

        width -= 30;

        let sWidth = Math.floor(width/5);




        let bgColor = "#fff";

        if(this.props.selected) {
            bgColor = "#0089d0";
        }

        return (
            <TouchableWithoutFeedback onPress={()=>this.props.onPress() }>


                <View style={{ width : sWidth, height : sWidth, backgroundColor : bgColor, borderWidth : 1, borderColor : '#ccc', alignItems: 'center', justifyContent: 'center'  }}>
                    <Text style={{fontSize : 10, textAlign: 'center', fontWeight:'bold'  }}>{this.props.text}</Text>
                </View>

            </TouchableWithoutFeedback>
        );
    }
}


const styles = StyleSheet.create({

});