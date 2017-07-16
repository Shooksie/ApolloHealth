import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, Icon } from 'react-native-elements';
import MapView from 'react-native-maps';
import { getDocInfo, fetchSchedule } from '../actions';
import Placemat from '../components/placemat';


class PharmPage extends Component {
  onPressButton() {
    Alert.alert(
    'Setting Pharmacy Complete'
  );
  }
  render() {
    console.log(this.props.curPharm);
    const { name, address, lat, long } = this.props.curPharm;
    return (
      <View style={{ flex: 1, marginTop: 100 }}>
        <Placemat label="Name:" value={name} />
        <Placemat label="Address" value={address} />
        <View
        style={{
          height: 300,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: 'lightgrey',
          marginRight: 15,
          marginLeft: 15,
        }}
        >
        <MapView
          style={{ left: 0, right: 0, top: 0, bottom: 0, position: 'absolute' }}
            region={{
              latitude: Number(lat),
              longitude: Number(long),
              latitudeDelta: 0.0421,
              longitudeDelta: 0.0421,
            }}
            scrollEnabled={false}
           zoomEnabled={false}
           pitchEnabled={false}
           rotateEnabled={false}
        >
        <MapView.Marker
          coordinate={{
            latitude: Number(lat),
            longitude: Number(long),
          }}
        >
        <View
          style={{
            borderWidth: 1,
            width: 25,
            height: 25,
            borderColor: 'red',
            borderRadius: 100,
            backgroundColor: 'lightblue',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
        <Icon
          raised
          name='pharmacy'
          type='material-community'
          color='#f50'
        />
        </View>
        </MapView.Marker>
        </MapView>
        </View>
        <Button onPress={this.onPressButton.bind(this)} title="Set Pharmacy" />
      </View>
    );
  }
}


const mapStateToProps = ({ currentDoc }) => {
  console.log(currentDoc);
  const { curPharm } = currentDoc;
  console.log(this.curPharm);
  return { curPharm };
};
export default connect(mapStateToProps, { getDocInfo, fetchSchedule })(PharmPage);
