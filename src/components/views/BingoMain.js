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
    TouchableWithoutFeedback,
    Alert,
    AsyncStorage,
    WebView,
    Platform,
    Dimensions
} from 'react-native';
import {captureRef} from "react-native-view-shot";
import Share from 'react-native-share';
import {StyledButton} from '../presentation/StyledButton';
import { NavigationActions } from 'react-navigation';
import {Colors} from '../../data/Styles';

import {BingoSquare} from '../container/BingoSquare';


import {DataManager} from'../../data/DataManager';

let dataManager = new DataManager();


export class BingoMain extends Component {

    static navigationOptions = {
        title: 'Bingo' ,
        headerVisible : false
    };

    constructor(props) {
        super(props) ;

        this.state = {
            grid : [
                [{},{},{},{},{}],
                [{},{},{},{},{}],
                [{},{},{},{},{}],
                [{},{},{},{},{}],
                [{},{},{},{},{}],
            ],


            words : [
                "Artificial Intelligence",
                "Blockchain",
                "Virtual Reality",
                "Crypto",
                "Machine Learning",
                "SASS",
                "MRR",
                "Bootstrap",
                "Founder",
                "Startup",
                "Algorithm",
                "Scalable",
                "Data",
                "Proprietary",
                "Digital",
                "Rockstar",
                "Secret Sauce",
                "Pivot",
                "Product Market Fit",
                "ARR",
                "Experts",
                "Market",
                "B2B",
                "B2C",
                "Burn Rate",
                "Exit",
                "Disrupt",
                "Users",
                "Churn",
                "Position",
                "Automation",
                "Growth",
                "Funding",
                "Cost of Acquisition",
                "Customer Lifetime Value",
                "eBook",
                "Charge More",
                "Blog",
                "MicroConf ™",
                "Strategy",
                "Innovate",
                "Investment",
                "Capital",
                "Incubator",
                "Accelerator"
            ]
        };



        this.shareBingo = this.shareBingo.bind(this);
        this.selectSquare = this.selectSquare.bind(this);
        this.checkForBingo = this.checkForBingo.bind(this);
        this.refreshBingo = this.refreshBingo.bind(this);



    }

    componentDidMount() {
        this.initBingoGrid();
    }

    initBingoGrid(fromScratch) {

        let grid = this.state.grid;


        let setNewGrid = () => {

            let words = shuffle( JSON.parse( JSON.stringify( this.state.words)) );
            let x = 0, y=0;
            for(x = 0; x < 5; x++) {
                for(y = 0; y < 5; y ++) {

                    grid[x][y] = {
                        text : words.pop(),
                        selected : false
                    }
                }
            }

            AsyncStorage.setItem('@BingoStore:bingoGrid', JSON.stringify(grid) );

            this.setState({grid});

        };


        if(!fromScratch) {

            AsyncStorage.getItem('@BingoStore:bingoGrid').then((val)=>{

                console.log(val);

                if(val && val.length > 0 && JSON.parse(val) ) {
                    grid = JSON.parse(val);
                    console.log("got grid");
                    this.setState({grid});
                }
                else {
                    setNewGrid();
                }

            }).catch(() => {
                setNewGrid();
            });
        }
        else {
            setNewGrid();
        }




    }

    refreshBingo() {

        // Works on both iOS and Android
        Alert.alert(
            'New Bingo Card',
            'Create a new card? This will erase your progress on your current card',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed') },
                {text: 'OK', onPress: () => this.initBingoGrid(true) },
            ],
            { cancelable: false }
        );

    }

    selectSquare(x, y) {






        let grid = this.state.grid;
        grid[x][y].selected = !grid[x][y].selected;
        this.setState({grid});
        this.checkForBingo();




        // Store in storage
        try {
            AsyncStorage.setItem('@BingoStore:bingoGrid', JSON.stringify(grid) );
        } catch (error) {
            // Error saving data
        }
    }

    checkForBingo() {



        let grid = this.state.grid;

        let bingo = false;

        // rows
        if(
            (grid[0][0].selected && grid[0][1].selected && grid[0][2].selected && grid[0][3].selected && grid[0][4].selected) ||
            (grid[1][0].selected && grid[1][1].selected && grid[1][2].selected && grid[1][3].selected && grid[1][4].selected) ||
            (grid[2][0].selected && grid[2][1].selected && grid[2][2].selected && grid[2][3].selected && grid[2][4].selected) ||
            (grid[3][0].selected && grid[3][1].selected && grid[3][2].selected && grid[3][3].selected && grid[3][4].selected) ||
            (grid[4][0].selected && grid[4][1].selected && grid[4][2].selected && grid[4][3].selected && grid[4][4].selected)
        ) {
            bingo = true;
        }


        // columns
        else if(
            (grid[0][0].selected && grid[1][0].selected && grid[2][0].selected && grid[3][0].selected && grid[4][0].selected) ||
            (grid[0][1].selected && grid[1][1].selected && grid[2][1].selected && grid[3][1].selected && grid[4][1].selected) ||
            (grid[0][2].selected && grid[1][2].selected && grid[2][2].selected && grid[3][2].selected && grid[4][2].selected) ||
            (grid[0][3].selected && grid[1][3].selected && grid[2][3].selected && grid[3][3].selected && grid[4][3].selected) ||
            (grid[0][4].selected && grid[1][4].selected && grid[2][4].selected && grid[3][4].selected && grid[4][4].selected)
        ) {
            bingo = true;
        }

        // cross
        else if(
            (grid[0][0].selected && grid[1][1].selected && grid[2][2].selected && grid[3][3].selected && grid[4][4].selected) ||
            (grid[0][4].selected && grid[4][0].selected && grid[1][3].selected && grid[3][1].selected && grid[2][2].selected)
        ) {
            bingo = true;
        }


        if(bingo) {

            this.setState({bingo : true});

        }
        else {
            this.setState({bingo : false});
        }

    }

    shareBingo() {

        captureRef(this._root, {
            format: "jpg",
            quality: 0.35
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


        const {height, width} = Dimensions.get('window');
        const aspectRatio = height/width;

        let imW = 350;
        let imH = 114;
        let imM = 20;
        if(Platform.OS === "ios" && aspectRatio < 1.6) {
            imW = 250;
            imH = 90;
            imM = 10;
        }




        let gridx = [0,1,2,3,4];
        let gridy = [0,1,2,3,4];


        return (
            <View style={{width:'100%',height:'100%',justifyContent : 'center'}}>




                <StatusBar
                    backgroundColor="rgba(0,0,0,.3)"
                    translucent={true}
                />


                <View ref={component => this._root = component}   style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,backgroundColor: "#fff", justifyContent: 'center', alignItems: 'center'}}>


                    <Image source={require('../../images/office.jpg') }
                           resizeMode="cover"
                           style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}/>




                    <Image
                        source={require('../../images/bingoconf2.png')}
                        resizeMode="contain"
                        style={{width: imW, height: imH, marginBottom : imM}}/>


                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 50}}>

                        {
                            gridx.map((el, x) =>
                                <View key={x} style={{backgroundColor:"#fff"}}>
                                    {
                                        gridy.map((el, y) =>
                                            <BingoSquare
                                                key={y}
                                                text={this.state.grid[x][y].text}
                                                selected={this.state.grid[x][y].selected}
                                                onPress={()=>this.selectSquare(x,y)}
                                            />)
                                    }
                                </View>
                            )
                        }

                    </View>

                    {
                        this.state.bingo &&
                            <Text>BINGO!!!</Text>
                    }

                    <View style={{flexDirection: 'row'}}>


                        <StyledButton
                            style={{width: 200,height: 50, backgroundColor : Colors.accent}}
                            textStyle={{ color: '#fff'}}
                            title="Share"
                            onPress={this.shareBingo}
                        />




                        <TouchableWithoutFeedback onPress={this.refreshBingo}>

                            <View style={{
                                height: 50,
                                width: 50,
                                alignItems:'center',
                                justifyContent:'center',
                                backgroundColor: Colors.accent,
                                borderRadius: 10,
                                marginLeft: 10
                            }}
                            >
                                <Image
                                    style={{height: 25, width: 25}}
                                    source={require('../../images/icons/refresh_icon.png')} />
                            </View>
                        </TouchableWithoutFeedback>

                    </View>

                </View>

                {
                    this.state.bingo &&
                    <View style={{
                        position:'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'black'
                    }}>
                    </View>
                }

                {
                    this.state.bingo &&
                    <WebView
                        source={require( '../../data/fireworks.html' )}
                        style={{position:'absolute',  top: 0, left: 0,width: '100%', height: '100%', backgroundColor: 'transparent'}}
                    />
                }

                {
                    this.state.bingo &&
                    <View style={{
                        position:'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>


                        <View style={{marginBottom : 0}}>

                            <Image source={require('../../images/bingoconf2.png')} resizeMode={"contain"}  style={{width: imW, height: imH, marginBottom : imM}}/>

                        </View>

                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30, marginBottom : 20}}>You Win!</Text>

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>

                            {
                                gridx.map((el, x) =>
                                    <View key={x} style={{backgroundColor:"#fff"}}>
                                        {
                                            gridy.map((el, y) =>
                                                <BingoSquare
                                                    key={y}
                                                    text={this.state.grid[x][y].text}
                                                    selected={this.state.grid[x][y].selected}
                                                    onPress={()=>this.selectSquare(x,y)}
                                                />)
                                        }
                                    </View>
                                )
                            }

                        </View>

                        <View style={{flexDirection: 'row', marginTop: 20}}>


                            <StyledButton
                                style={{width: 200,height: 50, backgroundColor : Colors.accent2}}
                                textStyle={{ color: '#000', fontWeight: 'bold'}}
                                title="Share Your Result"
                                onPress={this.shareBingo}
                            />
                        </View>


                    </View>
                }











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


function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}