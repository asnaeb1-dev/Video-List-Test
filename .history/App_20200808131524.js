import React,{Component} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native'
import ListItem from './src/Components/ListItem'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      PREV_VALUE: 0, 
      playVideo: false,
      list: [
        {
          id: 0,
          isVisible: false,
        },{
          id: 1,
          isVisible: false,
        },{
          id: 2,
          isVisible: false,
        },{
          id: 3,
          isVisible: false,
        },{
          id: 4,
          isVisible: false,
        },{
          id: 5,
          isVisible: false,
        },{
          id: 6,
          isVisible: false,
        },{
          id: 7,
          isVisible: false,
        },{
          id: 8,
          isVisible: false,
        },{
          id: 9,
          isVisible: false,
        },{
          id: 10,
          isVisible: false,
        },{
          id: 11,
          isVisible: false,
        },{
          id: 12,
          isVisible: false,
        },{
          id: 13,
          isVisible: false,
        },{
          id: 14,
          isVisible: false,
        }
      ]
    }
  }

  onViewableItemsChanged = ({viewableItems, changed}) => {
    changed.forEach((item, index) => {
      this.setState({
      })
    })
  }

  handleScroll = (yCoord) => {
    //movement is down
    console.log(yCoord)
    if(yCoord > 0){
      if(yCoord - this.state.PREV_VALUE < 1.5){
        this.setState({
          playVideo: true
        })
      }else{
        this.setState({
          playVideo: false
        })
  
      }
      this.setState({PREV_VALUE: yCoord})  
    }
  }

  render(){
    return(
      <View style={{flex: 1, margin: 5}}>
        <FlatList
          data={this.state.list}
          renderItem = {({item}) => <ListItem isVisible={true} _id={item.id} playVideo={this.state.playVideo}/>}
          windowSize= {2}
          //onViewableItemsChanged={this.onViewableItemsChanged}
          onScroll={(e) => this.handleScroll(e.nativeEvent.contentOffset.y)}
        />
      </View>
    )
  }
}