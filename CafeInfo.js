import React from 'react';
import { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class CafeInfo extends Component{

    constructor(){
        super();
        this.state={
            data:null
        }
    }
    render(){
        return (
            <View>
                <Text>카페 정보창임</Text>
                {/* <Button title='화면전환' onPress={()=>{this.props.navigation.navigate('review')}}></Button> */}
                {/* <Button title="카페정보 읽어오기" onPress={this.clickBtn}></Button> */}
                <FlatList
                data={this.state.data}
                renderItem={(item, index)=>{
                    return (
                        <View>
                            <Text>{item.CAFE_NM}</Text>
                            <Text>{item.SMPL_INTRO}</Text>
                        </View>
                    );
                }}
                    >
                    
                </FlatList>

            </View>
        );
    }

    clickBtn=()=>{
        let url='http://openapi.seoul.go.kr:8088/4753614f706b616d34347a6e614361/json/jobCafeOpenInfo/1/5';
        fetch(url)
            .then((response)=>response.json())
            .then((resJson)=> {this.setState({data:resJson.jobCafeOpenInfo.row})});
    }

    componentDidMount(){
        if(this.state.data!=null){
            this.clickBtn();
        }
        this.clickBtn();

            // return(
            //     <FlatList
            //     data={this.state.data}
            //     renderItem={(item, index)=>{
            //         return (
            //             <View>
            //                 <Text>{item.CAFE_NM}</Text>
            //                 <Text>{item.SMPL_INTRO}</Text>
            //             </View>
            //         );
            //     }}
            //     >
                    
            // </FlatList>
            // );
    }
} 