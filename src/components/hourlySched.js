import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Text, Button } from 'react-native-elements';

class HourlySched extends Component {
  scheduling() {
      if (this.props.busy === 0) {
        return (<View><Text h2 fontSize={10}> Not Avalible</Text>
          <Button title="schedule apoinment" disabled /></View>);
      }
      return (
        <Button
        buttonStyle={{ backgroundColor: '#2E86C1'}}
        title="schedule apoinment"
        onPress={() => { Alert.alert('Appoinment Set'); }} />
      );
    }
  render() {
    return (
      <View
      style={{
        borderWidth: 1,
        height: 200,
        flexDirection: 'column',
        marginRight: 15,
        borderColor: 'lightblue',
        marginLeft: 15,
        justifyContent: 'center',

        borderRadius: 5,
        paddingTop: 30,
        marginBottom: 20
    }}>
        <View
        style={{
            backgroundColor: 'white',
            marginRight: 15,
            marginLeft: 15,
            borderWidth: 1,
            borderColor: 'lightgrey',
            flexDirection: 'row',
            alignItems: 'center',
            height: 50,
            borderRadius: 5,
            marginBottom: 20
          }}
        >
          <View>
            <Text style={{ fontSize: 30 }} h1> Time:</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20 }} h2> {this.props.time} </Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
            {this.scheduling()}
        </View>
      </View>
    );
  }
}


export default HourlySched;
