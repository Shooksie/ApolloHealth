import _ from 'lodash';
import React, { Component } from 'react';
import {  ActivityIndicator, View, ScrollView, ListView } from 'react-native';
import { SearchBar, Text, Button , Icon} from 'react-native-elements';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { setDocInfo, getPharm, getDoc, setPharmInfo } from '../actions';
import Doc from '../Data/docs.json';
import OutOfPocket from '../components/outofpocket.js';
import ToDoCard from '../components/todocard';
import Graph from '../components/graph';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 38.971870,
      longitude: -94.579764,
      error: null,
      obj: false,
    };
  }
  componentWillMount() {
    this.props.getDoc();
    this.props.getPharm();
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: 38.943204, //Number(position.coords.latitude),
          longitude: -94.531404, //Number(position.coords.longitude),
          error: null,
          view: true
        });
      },
      (error) => this.setState({ error: error.message }),
      { timeout: 20000, maximumAge: 1000 },
    );
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }
  onPressCallout(marker) {
    const { name, address, specialty, times_available, lat, lon } = marker;
    this.props.setDocInfo({ name, address, specialty, times_available, lat, lon });
  }
  onPressPharmCallout(marker) {
    const { name, address, lat, long } = marker;
    this.props.setPharmInfo({ name, address, lat, long });

  }
  renderList() {
   return (<View
   style={{
     height: 400,
     borderWidth: 1,
     marginTop: 20,
     borderRadius: 5,
     borderColor: 'lightgrey',
     marginRight: 15,
     marginLeft: 15,
     marginBottom: 20
   }}
   >
   <MapView
   style={{ left: 0, right: 0, top: 0, bottom: 0, position: 'absolute' }}
     region={{
       latitude: this.state.latitude,
       longitude: this.state.longitude,
       latitudeDelta: 0.0421,
       longitudeDelta: 0.0421,
     }}
   >
       <MapView.Marker
         coordinate={{
           latitude: 38.943204,
           longitude: -94.531404,
         }}
         title={'current Location'}
       >
       <View
        style={{
          borderWidth: 1,
          width: 25,
          height: 25,
          borderColor: 'blue',
          borderRadius: 100,
          backgroundColor: 'lightblue',
          alignItems: 'center',
          justifyContent: 'center' }}
       >
        <View
          style={{
            borderWidth: 2,
            width: 10,
            height: 10,
            borderColor: 'white',
            borderRadius: 100,
            backgroundColor: 'blue'
          }}
        />
      </View>
       </ MapView.Marker>
      {
        this.props.doclist.map((marker) => {
          return (<MapView.Marker
            coordinate={{
              latitude: Number(marker.lat),
              longitude: Number(marker.lon),
            }}
            title={marker.name}
            description={marker.address}
            onCalloutPress={() => this.onPressCallout(marker)}
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
        );
        })
      }
      {
        this.props.pharmlist.map((marker) => {
          return (
          <MapView.Marker
            coordinate={{
              latitude: Number(marker.lat),
              longitude: Number(marker.long),
            }}
            title={marker.name}
            description={marker.address}
            onCalloutPress={() => this.onPressPharmCallout(marker)}
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
            </MapView.Marker>);
      })}
   </ MapView>
   </View>);
 }
  render() {
    if (this.props.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white', marginTop: 30 }}>
        <OutOfPocket />
        <View style={{ flex: 1, paddingBottom: 20 }}>
          <ToDoCard />
          <View
          style={{
            marginTop: 20,
            flex: 1,
            borderBottomWidth: 1,
            marginRight: 15,
            marginLeft: 15 }}
          />
        </View>
           {this.renderList()}
        </ScrollView>
    );
  }
}

const mapStateToProps = ({ doc }) => {
  const { doclist, pharmlist, isLoading } = doc;
  return { doclist, pharmlist, isLoading };
};
export default connect(mapStateToProps, { setDocInfo, getPharm, getDoc, setPharmInfo })(Home);
