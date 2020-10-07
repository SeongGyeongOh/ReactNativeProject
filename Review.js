import React, {Component} from 'react';
import { Button, Text, View } from 'react-native';


export default class Review extends Component{
    
    // constructor(){
    //     super();
    //     this.state={
    //         data:null
    //     }
    // }
    render(){
        // const item = this.props.route.params;

        return(
            <View>
                <Text>여기는 아마도 리뷰창!!</Text>
                <Button title="버튼이다" onPress={()=>this.loadData()}></Button>
            </View>
        );
    }

    loadData=()=>{
        // this.setState({data:item});
        alert('aa');
        
    }
    // componentDidMount(){
    //     this.loadData();
    // }
}