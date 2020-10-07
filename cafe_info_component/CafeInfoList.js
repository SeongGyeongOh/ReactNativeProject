import React, {Component} from 'react';
import { Alert, FlatList, Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CafeInfoList extends Component{

    constructor(){
        super();
        this.state={
            cafeData:[]
        }
    }

    render(){
        
        return(
            <View>
                {/* <Text>카페리스트 컴포넌트!!</Text> */}
                <FlatList
                    data={this.state.cafeData}
                    renderItem={({item, index})=>{
                        return(
                            <TouchableOpacity 
                                style={styles.cafeItem}
                                onPress={()=> this.props.onPress()}
                                >
                                <Image 
                                    source={{uri:item.FILE_NM}}
                                    style={{width:"35%", height:150}}>
                                </Image>
                                <View style={styles.cafeInfo}>
                                    <Text style={styles.cafeTitle}>{item.CAFE_NM}</Text>
                                    <Text style={styles.cafeTime}
                                            numberOfLines={2}
                                            ellipsizeMode="tail">{item.USE_DT}</Text>
                                    <Text style={styles.cafeIntro} 
                                            numberOfLines={3} 
                                            ellipsizeMode='tail'>{item.SMPL_INTRO}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={({item, index})=> index}
                    >

                </FlatList>
            </View>
        );
    }

    loadData=()=>{
        fetch(this.props.cafeuri)
            .then(res=> res.json())
            .then(resjson=> {
                this.setState({cafeData:resjson.jobCafeOpenInfo.row})});
    }

    componentDidMount(){
        if(this.props.cafeuri) this.loadData();
    }
}

const styles=StyleSheet.create({
    cafeItem:{
        margin:8,
        flexDirection:"row"
    },
    cafeInfo:{
        marginVertical:4,
        marginHorizontal:8,
        overflow:"visible",
        width:'65%',
        height:150,
    },
    cafeTitle:{
        fontSize:16,
        fontWeight:'bold',
        marginBottom:2
    },
    cafeTime:{
        marginBottom:8,
        color:'#444444dd',
    },
    cafeIntro:{
        
    }
})