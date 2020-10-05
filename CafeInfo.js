import React from 'react';
import { Component } from 'react';
import { FlatList, Button, Text, View } from 'react-native';

export default class CafeInfo extends Component{

    constructor(){
        super();
        this.state={
            data:null
        }
    }
    render(){
        return (
            <View style={{flex:1}}>
                <Text>카페 정보창임</Text>
                {/* <Button title="버튼!!!" onPress={this.showList}></Button> */}
    
                <FlatList
                    data={this.state.data}
                    renderItem={(obj)=>{
                        return(
                            <Text>{obj.item.CAFE_NM}</Text>
                        );
                    }}>
                </FlatList>

            </View>
        );
    }

    showList=()=>{
        // alert(this.state.data[0].CAFE_NM);
        // return(

        // );
    }

    clickBtn=()=>{
        let url='http://openapi.seoul.go.kr:8088/4753614f706b616d34347a6e614361/json/jobCafeOpenInfo/1/1000';
        fetch(url)
            .then((response)=>response.json())
            .then((resJson)=> {this.setState({data:resJson.jobCafeOpenInfo.row})});
    }

    componentDidMount(){
        if(this.state.data!=null){
            this.clickBtn();
        }
        this.clickBtn();
    }

} 