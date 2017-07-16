import React, { Component } from 'react';
import { ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Camera from 'react-native-camera';
import { Button } from 'react-native-elements';

class Camer extends Component {
  takePicture() {
     const options = {};
     //options.location = ...
     this.camera.capture({metadata: options})
       .then((data) => console.log(data))
       .catch(err => console.error(err));
   }
  render() {
    return(
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Button buttonStyle={{ borderRadius: 20}} icon={{name:' camera', color: 'white'}} />
        </Camera>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 25
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
});

export default Camer;
