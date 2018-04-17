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

        let words = [
            "Artificial Intelligence",
            "BlockChain",
            "Virtual Reality",
            "Cryptocurrency",
            "Machine Learning",
            "SASS",
            "MRR",
            "Bootstrap",
            "Scalable",
            "Data-driven",
            "Proprietary",
            "Digital",
            "Rockstar",
            "Secret Sauce",
            "Pivot",
            "Product Market Fit",
            "ARR",
            "Experts in field",
            "Billion dollar market",
            "Trillion dollar market",
            "B2B",
            "B2C",
            "Burn Rate",
            "Exit",
            "Disrupt",
            "User Adoption",
            "Churn",
            "Position",
            "Automation",
            "Growth Rate",
            "Funding",
            "Cost of Acquisition",
            "Customer Lifetime Value",
            "eBook",
            "Charge More",
            "Blog",
            "MicroConf ™"
        ];


        let word = words[ Math.floor( Math.random() * words.length )];

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

        if(this.state.selected) {
            bgColor = "#0089d0";
        }

        return (
            <TouchableWithoutFeedback onPress={()=>this.setState({selected : !this.state.selected})}>


                <View style={{ width : sWidth, height : sWidth, backgroundColor : bgColor, borderWidth : 1, borderColor : '#ccc', alignItems: 'center', justifyContent: 'center'  }}>


                    <Text style={{fontSize : 10, textAlign: 'center', fontWeight:'bold'  }}>{this.state.word}</Text>

                </View>
            </TouchableWithoutFeedback>
        );
    }
}


const styles = StyleSheet.create({

});