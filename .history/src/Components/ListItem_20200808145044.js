import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class ListItem extends Component{
    render(){
        return(
            <TouchableOpacity 
                onLayout={(e) => this.props.sendLayout(e.nativeEvent.layout)}
            style={  !this.props.playVideo?
                {marginVertical: 750, flex: 1,height: this.props.height, backgroundColor: 'red', marginVertical: 5, justifyContent: 'center', alignItems: 'center'}:
                {marginVertical: 750,flex: 1,height: this.props.height, backgroundColor: 'blue', marginVertical: 5, justifyContent: 'center', alignItems: 'center'}
            }>
                <Text style={{color: '#fff', fontSize: 40, fontWeight: 'bold'}}>{this.props._id}</Text>
                <Text style={{color: '#fff', fontSize: 40, fontWeight: 'bold'}}>{this.props.playVideo? 'play':'pause'}</Text>
            </TouchableOpacity>
        )
    }
}