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

import {StyledButton} from '../presentation/StyledButton';
import { NavigationActions } from 'react-navigation';
import {Colors} from '../../data/Styles';

export class Onboard0 extends Component {
    constructor(props) {
        super(props) ;

        this.state = {
            username : "",
            password : "",
            screen : 0
        };

    }
    static navigationOptions = {
        title: 'Login' ,
        headerVisible : false
    };

    continue() {

        //this.props.navigation.navigate('MainTabs');
        this.props.navigation.navigate("Onboard1");

    }

    render() {

        return (
            <View style={{width:'100%',height:'100%',justifyContent : 'center'}}>
                <Image source={require('../../images/beerbg.jpg') }
                       resizeMode="cover"
                       style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}/>


                <View style={{flexDirection: 'column', alignItems: 'center', marginBottom: 50}}>
                    <Image source={require('../../images/app_icon_white.png')} style={{width: 320, height: 320}}/>
                    {/*<View style={{flexDirection: 'row'}}>*/}
                        {/*<Text style={{*/}
                            {/*color: '#fff',*/}
                            {/*fontStyle: 'italic',*/}
                            {/*fontSize: 70,*/}
                            {/*fontWeight: 'bold',*/}
                            {/*marginTop: -10,*/}
                            {/*backgroundColor : 'transparent'*/}
                        {/*}}>Barley</Text>*/}
                        {/*<Text style={{*/}
                            {/*color: Colors.orange,*/}
                            {/*fontStyle: 'italic',*/}
                            {/*fontSize: 30,*/}
                            {/*fontWeight: 'bold',*/}
                            {/*backgroundColor : 'transparent'*/}
                        {/*}}>WATERS</Text>*/}
                    {/*</View>*/}
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <StyledButton title="Get Started" onPress={()=> {this.continue()}}
                                      enabled={true}
                                      style={{
                                          width: '80%',
                                          height: 40,
                                          backgroundColor: Colors.accent,
                                          borderRadius : 20
                                      }}
                                      textStyle={{
                                          fontSize: 16,
                                          fontWeight: 'bold',
                                          color: '#fff',
                                          fontStyle: 'italic'
                                      }}/>
                    </View>
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