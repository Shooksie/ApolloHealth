


import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { SearchBar, Text, Button} from 'react-native-elements'



class OutOfPocket extends Component {
  render(){
    return(
      <View style={{ flex: 1, paddingBottom: 20,
      marginTop: 20,
      borderBottomWidth: 1,
       marginRight: 15,
       marginLeft: 15}}>
      <View
       style={{
           alignItems: 'flex-start',
           borderBottomWidth: 1,
           paddingBottom: 10,
           marginBottom: 20
         }}>
         <Text h1 style={{ fontSize: 20}}>MAX ofp tracker </Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 10}}>

         <View style={{ height: 25,  width: 350, backgroundColor: 'grey', borderRadius: 5 }}>
         <View style={{ height: 25, width: 250, backgroundColor: 'green', borderRadius: 5 }}>
         </View>

         </View>
      </View>
      <View
      style={{
          alignItems: 'flex-end',
          paddingBottom: 5,
          marginTop: 5,
          flex: 1
        }}>
        <Text  h4> 1200/1600$</Text>
      </View>
      <View
       style={{
           alignItems: 'flex-end',
           paddingBottom: 5,
           marginTop: 5,
           flex: 1
         }}>
         <Button title='View History'
           buttonStyle={{ backgroundColor: 'white', borderWidth: 2, borderRadius: 7}}
           color={'black'} />
       </View>
      </View>
    );
  }
}

export default OutOfPocket;
