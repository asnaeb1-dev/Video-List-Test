import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class ListItem extends Component{
    render(){
        return(
            <TouchableOpacity style={{height: 200, backgroundColor: 'red', marginVertical: 5, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{flex: 1, textAlign: 'center', color: '#fff', fontSize: 20, fontWeight: 'bold'}}>{this.props._id}</Text>
            </TouchableOpacity>
        )
    }
}