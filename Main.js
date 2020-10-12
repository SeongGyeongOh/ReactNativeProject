import React, {Component} from 'react';
import { Button, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import CafeInfo from './CafeInfo';
import Review from './Review';

// 4753614f706b616d34347a6e614361 //서울시데이터 일자리카페 api 키
const Stack=createStackNavigator();

export default class Main extends Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        options={{
                            title:"일자리카페 목록"
                        }}
                        name="cafeinfo" component={CafeInfo}></Stack.Screen>
                    <Stack.Screen
                        options={{
                            title:"상세정보"
                        }} name="review" component={Review}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

    // clickBtn=()=>{
    //     // let url="http://openapi.seoul.go.kr:8088/sample/json/jobCafeOpenInfo/1/5/"
    //     let key='4753614f706b616d34347a6e614361';
    //     let type='json';
    //     let service='jobCafeOpenInfo';
    //     let start=1;
    //     let end=5;

    //     // let url=`http://openapi.seoul.go.kr:8088?KEY=${key}&TYPE=${type}&SERVICE=${service}&START_INDEX=${start}&END_INDEX=${end}`;
    //     let url='http://openapi.seoul.go.kr:8088/4753614f706b616d34347a6e614361/json/jobCafeOpenInfo/1/5';
    //     // http://openapi.seoul.go.kr:8088?KEY="4753614f706b616d34347a6e614361"&TYPE="json"&SERVICE="jobCafeOpenInfo"&START_INDEX=1&END_INDEX=5
    //     fetch(url)
    //         .then((response)=>{
    //             return response.text();
    //         })
    //         .then((resText)=>{
    //             alert(resText);
    //         })
    //         .catch((error)=>{
    //             alert(error);
    //         })
    // }
}