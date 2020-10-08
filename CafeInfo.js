import React from 'react';
import { Component } from 'react';
import { FlatList, Button, Text, View, StyleSheet } from 'react-native';
import CafeInfoList from './cafe_info_component/CafeInfoList';

const infoUri="http://openapi.seoul.go.kr:8088/4753614f706b616d34347a6e614361/json/jobCafeOpenInfo/1/1000";

export default class CafeInfo extends Component{

    constructor(){
        super();
        this.state={
            data:null
        }
    }

    render(){
        return (
            <View style={styles.root}>
                <CafeInfoList 
                    cafeuri={infoUri}
                    onPress={(item)=> this.props.navigation.navigate('review', {item})}>
                </CafeInfoList>

            </View>
        );
    }

    // clickBtn=()=>{
    //     let url='http://openapi.seoul.go.kr:8088/4753614f706b616d34347a6e614361/json/jobCafeOpenInfo/1/1000';
    //     fetch(url)
    //         .then((response)=>response.json())
    //         .then((resJson)=> {this.setState({data:resJson.jobCafeOpenInfo.row})});
    // }

    // componentDidMount(){
    //     if(this.state.data!=null){
    //         this.clickBtn();
    //     }
    //     this.clickBtn();
    // }

} 

const styles=StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'white'
    }
});