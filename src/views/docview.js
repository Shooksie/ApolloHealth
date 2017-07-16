import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Button, Icon } from 'react-native-elements';
import MapView from 'react-native-maps';
import { getDocInfo, fetchSchedule } from '../actions';
import Placemat from '../components/placemat';


class DocPage extends Component {
  componentWillMount() {
    console.log(this.props);
    const { times_available } = this.props.curDoc;
    this.props.fetchSchedule({ times_available });
  }
  onPressButton() {
    Actions.sched();
  }

  render() {
    console.log(this.props.curDoc);
    const { name, address, specialty, lat, lon } = this.props.curDoc;
    return (
      <View style={{ flex: 1, marginTop: 100 }}>
        <Placemat label="Name:" value={name} />
        <Placemat label="Specialty" value={specialty} />
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
              longitude: Number(lon),
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
            longitude: Number(lon),
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
        name='stethoscope'
        type='material-community'
        color='green'
        />
        </View>
        </MapView.Marker>
        </MapView>
        </View>
        <Button onPress={this.onPressButton.bind(this)} title="Schedule Appoinment" />
      </View>
    );
  }
}


const mapStateToProps = ({ currentDoc }) => {
  console.log(currentDoc);
  const { curDoc } = currentDoc;
  console.log(this.curDoc);
  return { curDoc };
};
export default connect(mapStateToProps, { getDocInfo, fetchSchedule })(DocPage);
