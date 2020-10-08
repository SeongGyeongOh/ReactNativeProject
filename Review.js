import React, {Component} from 'react';
import { ActivityIndicator, Alert, Button, Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';


export default class Review extends Component{
    
    constructor(){
        super();
        this.state={
            data:null,
            text:"aa"
        }
    }
    render(){
        // const item = this.props.route.params;

        return this.state.data?
        (
            <ScrollView>
                <View>
                    <Image source={{uri:this.state.data.FILE_NM}} style={{width:Dimensions.get('window').width, height:300}}></Image>
                    <Text style={styles.covertext}>{this.state.data.CAFE_NM}</Text>
                </View>
                <View>
                    <Text>{this.state.data.CAFE_NM}</Text>
                    <Text>운영시간 : {this.state.data.USE_DT}</Text> 
                    <Text>{this.state.data.SMPL_INTRO}</Text> 
                    <Text>{this.state.data.SPACE_INFRO}</Text> 
                    <Text>{this.state.data.FACLT_INFO1}</Text> 
                    <Text>{this.state.data.BASS_ADRES_CN}</Text> 
                </View>
            </ScrollView>
        ) :
        (
            <ActivityIndicator color='orange' size='large'></ActivityIndicator>
        );
    }

    show=()=>{
        this.setState({text:this.state.data.CAFE_NM});
    }

    loadData=()=>{
        const {item}=this.props.route.params;
        this.setState({data:item});
    }
    componentDidMount(){
        if(this.props.route.params) this.loadData();
        this.loadData();
    }
}

const styles=StyleSheet.create({
    covertext:{
        position:'absolute',
        backgroundColor:'#000000af',
        width:'100%',
        padding:16,
        bottom:0,
        color:'white',
        fontSize:18,
        fontWeight:"bold"
    }
});