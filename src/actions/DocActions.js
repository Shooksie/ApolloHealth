import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  GETDOC,
  GETPHARM,
  SETDOC,
  SCHEDFETCH,
  SETPHARM
 } from './types';

export const setPharmInfo =({ name, address, lat, long }) => {
  return (dispatch) => {
    dispatch({
      type: SETPHARM,
      payload: { name, address, lat, long }
    });
    Actions.pharmview();
  };

};
export const setDocInfo = ({ name, address, specialty, times_available, lat, lon }) => {
  return (dispatch) => {
    dispatch({
      type: SETDOC,
      payload: { name, specialty, address, times_available, lat, lon }
    });
    Actions.docview();
  };
 };

export const fetchSchedule = ({ times_available }) => {
  return (dispatch) => {
    firebase.database().ref(`/${times_available}/`)
      .on('value', snapshot => {
        console.log(snapshot.val());
        dispatch({
          type: SCHEDFETCH, payload: buildData(snapshot.val())
        });
      });
  };
};

export function getPharm() {
  return (dispatch) => {
  fetch('http://localhost:3000/get_pharmacy/')
  .then((response) => response.json())
  .then((responseJson) => {
    dispatch({ type: GETPHARM, payload: responseJson.pharmacies });
      })
      .catch((error) => {
        console.error(error);
      });
    };
}

export function getDoc() {
  return (dispatch) => {
  fetch('http://localhost:3000/get_doctor/')
  .then((response) => response.json())
    .then((responseJson) => {
      dispatch({ type: GETDOC, payload: responseJson.doctors });
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
function buildData(data) {
  const val = {};
  let day = '2017-';
  let week = '';
  let arraydates = [];
  for (let x = 1; x < 13; x++) {
    if(x > 9) {
      week = '2017-'.concat(String(x));
       val[week] = {};
      for (let y = 1; y < (data[x].length); y++) {
        if( y > 9) {
          arraydates = [];
          day = '2017-'.concat(String(x), '-', String(y));
          for (let z = 8; z < 17; z++) {
            if (z > 9) {
            arraydates.push({
              time: String(z).concat(':00-', String(z), ':50'),
              Busy: data[x][y][z].busy
            });
          } else {
            arraydates.push({
              time: '0'.concat(String(z), ':00-', String(z), ':50'),
              Busy: data[x][y][z].busy
            });
          }
          }
        } else {
          arraydates = [];
          day = '2017-'.concat(String(x), '-0', String(y));
          for (let z = 8; z < 17; z++) {
            if (z > 9) {
            arraydates.push({
              time: String(z).concat(':00-', String(z), ':50'),
              Busy: data[x][y][z].busy
            });
          } else {
            arraydates.push({
              time: '0'.concat(String(z), ':00-', String(z), ':50'),
              Busy: data[x][y][z].busy
            });
          }
          }
        }
        val[week][day] = arraydates;
      }
    } else {
      week = '2017-0'.concat(String(x));
       val[week] = {};
      for (let y = 1; y < (data[x].length); y++) {
        if( y > 9) {
          arraydates = [];
          day = '2017-0'.concat(String(x), '-', String(y));
          for (let z = 8; z < 17; z++) {
            if (z > 9) {
            arraydates.push({
              time: String(z).concat(':00-', String(z), ':50'),
              Busy: data[x][y][z].busy
            });
          } else {
            arraydates.push({
              time: '0'.concat(String(z), ':00-', String(z), ':50'),
              Busy: data[x][y][z].busy
            });
          }
          }
        } else {
          arraydates = [];
          day = '2017-0'.concat(String(x), '-', '0', String(y));
          for (let z = 8; z < 17; z++) {
            if (z > 9) {
            arraydates.push({
              time: String(z).concat(':00-', String(z), ':50'),
              Busy: data[x][y][z].busy
            });
          } else {
            arraydates.push({
              time: '0'.concat(String(z), ':00-', String(z), ':50'),
              Busy: data[x][y][z].busy
            });
          }
          }
        }
        val[week][day] = arraydates;
      }
    }
  }
  return val;
}
