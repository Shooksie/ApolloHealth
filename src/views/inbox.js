import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


class inbox extends Component {
  render(){
    return(
      <ScrollView style={{ flex: 1, marginTop: 65 }}>
          <ListItem onPress={Actions.chatbot} title="ChatBot'" subtitle="Hello" />
          <ListItem onPress={Actions.messages} title="doctor max" subtitle="it seems like you need to...." />
          <ListItem title="doctor jacob" subtitle="smantha might have a cold...." />
      </ScrollView>
    );
  }

}

export default inbox;
