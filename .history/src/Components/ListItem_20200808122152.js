import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class ListItem extends Component{
    render(){
        return(
            <TouchableOpacity style={{height: 200, backgroundColor: 'red', borderRadius: 40}}>
                <Text style={{flex: 1, textAlign: 'center'}}>{this.props._id}</Text>
            </TouchableOpacity>
        )
    }
}