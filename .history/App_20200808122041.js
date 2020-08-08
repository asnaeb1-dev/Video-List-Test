import React,{Component} from 'react';
import {View, FLatList, StyleSheet, FlatList, Text} from 'react-native'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      list: [
        {
          id: 1,
          isVisible: false
        },{
          id: 2,
          isVisible: false
        },{
          id: 3,
          isVisible: false
        },{
          id: 4,
          isVisible: false
        },{
          id: 5,
          isVisible: false
        }
      ]
    }
  }


  render(){
    return(
      <View>
        <FlatList
          data={this.state.list}
          renderItem = {({item}) => <ListItem isVisible={true} _id={item.id}/>}
        />
      </View>
    )
  }
}