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
    TouchableWithoutFeedback
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import {Colors} from '../../data/Styles';

import {BingoSquare} from '../container/BingoSquare';


export class BingoGrid extends Component {
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
            "Customer Lifetime Value"
        ];


        let word = words[ Math.floor( Math.random() * words.length )];

        this.state = {

            word : word,
            selected : false
        };

    }

    render() {



        let gridx = [0,1,2,3,4];
        let gridy = [0,1,2,3,4];




        return (
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 50}}>

                {
                    gridx.map((el, x) =>
                        <View key={x} style={{backgroundColor:"#fff"}}>
                            {
                                gridy.map((el, y) => <BingoSquare key={y} />)
                            }
                        </View>
                    )
                }

            </View>
        );
    }
}


const styles = StyleSheet.create({

});