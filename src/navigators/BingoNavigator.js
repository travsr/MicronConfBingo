import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    Slider,
    TextInput,
    Button,
    Platform
} from 'react-native';

import { TabNavigator, StackNavigator } from 'react-navigation';

import {Colors} from '../data/Styles';

import { Onboard0 } from '../components/views/Onboard0';
import { Onboard1 } from '../components/views/Onboard1';
import { Onboard2 } from '../components/views/Onboard2';
import { Onboard3 } from '../components/views/Onboard3';

import { BingoMain } from '../components/views/BingoMain';
import { BingoFeed } from '../components/views/BingoFeed';


import { PlanListing } from '../components/views/PlanListing';
import { PlanSettings } from '../components/views/PlanSettings';



// Signup Stack



// Onboard Tabs
const OnboardTabs = TabNavigator({
    Onboard0: { screen : Onboard0  },
    Onboard1 : { screen : Onboard1 },
    Onboard2 : { screen : Onboard2 },
    Onboard3 : { screen : Onboard3 }
}, {
    tabBarOptions : {
        style :  {
            display :'none',
        },
        showLabel :  false,
        showIcon : false
    },
    swipeEnabled : true
});



// Settings Screens (Stack)
const PlanStack = StackNavigator({
    PSettings : {screen : PlanSettings},
    PListing : {screen : PlanListing}
}, {
    initialRouteName : "PSettings",
    headerMode : "none"
});





// Main Tabs
const MainTabs = TabNavigator({
    BingoMain: { screen : BingoMain  },
    BingoFeed: { screen : BingoFeed  },
}, {
    tabBarOptions : {
        indicatorStyle : { backgroundColor : Colors.accent},
        style : {backgroundColor : '#000'}
    },
    swipeEnabled : true,
    initialRouteName : "BingoMain",
    tabBarPosition: 'bottom'
});


// Main Stack
export const BingoNavigator = StackNavigator({
    Onboard : {screen : OnboardTabs},
    Main : {screen : MainTabs}
}, {
    initialRouteName : "Main",
    headerMode : "none"
});

