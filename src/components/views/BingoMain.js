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
    TouchableOpacity
} from 'react-native';
import {captureRef} from "react-native-view-shot";
import Share from 'react-native-share';
import {StyledButton} from '../presentation/StyledButton';
import { NavigationActions } from 'react-navigation';
import {Colors} from '../../data/Styles';

import {BingoSquare} from '../container/BingoSquare';


export class BingoMain extends Component {
    constructor(props) {
        super(props) ;

        this.state = {
            username : "",
            password : "",
            screen : 0,
            text : "test"
        };

        this.shareBingo = this.shareBingo.bind(this);

    }
    static navigationOptions = {
        title: 'Bingo' ,
        headerVisible : false
    };

    shareBingo() {



        captureRef(this._root, {
            format: "jpg",
            quality: 0.2
        }).then(
            (uri) => {



                // Share.share({
                //     message: 'I got a BINGO!!',
                //     url: uri,
                //     title: 'I got a BINGO!!'
                // }, {
                //     // Android only:
                //     dialogTitle: 'Bingo!'
                // });




                Share.open({
                    url : uri,
                    title: 'I got a BINGO!!',
                    message: 'I got a BINGO!!'
                }).catch((err) => { err && console.log(err); });


                console.log("Image saved to", uri)
            },
            error => console.error("Oops, snapshot failed", error)
        );


    }

    render() {


        let gridx = [0,1,2,3,4];
        let gridy = [0,1,2,3,4];


        return (
            <View style={{width:'100%',height:'100%',justifyContent : 'center', alignItems: 'center'}}>

                {/*<StatusBar*/}
                    {/*backgroundColor="rgba(0,0,0,.3)"*/}
                    {/*translucent={true}*/}
                {/*/>*/}

                <View ref={component => this._root = component}   style={{width:'100%',height:'100%',backgroundColor: "#fff", justifyContent: 'center', alignItems: 'center'}}>

                    <Image source={require('../../images/office.jpg') }
                           resizeMode="cover"
                           style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}/>


                    <Image source={require('../../images/bingoconf2.png')}  style={{width: 350, height: 114, marginBottom : 20}}/>






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

                <StyledButton
                    style={{width: 200,height: 50, backgroundColor : Colors.accent}}
                    textStyle={{ color: '#fff'}}
                    title="Share"
                    onPress={this.shareBingo}
                />
                </View>

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