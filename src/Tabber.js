import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Tabs, Tab, Icon, Text, Divider, SearchBar } from 'react-native-elements'
import { open } from './actions';

import Calendar from './views/sched';
import Home from './views/home';
import Camera from './views/camera';

class Taber extends  Component  {
  constructor() {
      super()
      this.state = {
        selectedTab: 'home',
      }
    }

  changeTab(selectedTab) {
    this.setState({ selectedTab })
  }

  render() {
    const { selectedTab } = this.state;
    const { open } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View
        style={{
          flex: 1,
          marginTop: 45
        }}
        >
          <View
            style={{
              flex: 3,
              alignItems: 'center',
              marginRight: 15,
              marginLeft: 15,
              marginBottom: 20,
              paddingBottom: 10
            }}
            >
            <Text h1> Apollo Health</Text>
          </View>
          <View style={{ flex: 1, paddingBottom: 10 }}>
          <SearchBar
            round
            lightTheme
            placeholder='Type Here...'
          />
        </View>
        </View>
      <View style={{ flex: 6 }}>
      <Tabs>
        <Tab
          titleStyle={{ fontWeight: 'bold', fontSize: 10}}
          selectedTitleStyle={{ marginTop: -1, marginBottom: 6}}
          renderIcon={
            () =>
            <Icon
            containerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 12
            }} color={'#5e6977'} name='menu' size={33}
            />}
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='menu' size={30} />}
          onPress={open.bind(this)}
        >
          <Home />
        </Tab>
        <Tab
          titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
          selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
          selected={selectedTab === 'home'}
          title={selectedTab === 'home' ? 'HOME' : null}
          renderIcon={
            () =>
            <Icon
              containerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 12
              }}
              color={'#5e6977'}
              name='home'
              size={33}
            />
          }
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='home' size={30} />}
          onPress={() => this.changeTab('home')}>
          <Home />
        </Tab>
        <Tab
          titleStyle={{ fontWeight: 'bold', fontSize: 10}}
          selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
          selected={selectedTab === 'camera'}
          title={selectedTab === 'camera' ? 'CAMERA' : null}
          renderIcon={
            () =>
            <Icon
              containerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 12
              }}
              color={'#5e6977'}
              name='camera'
              size={33}
            />
          }
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='camera' size={30} />}
          onPress={() => this.changeTab('camera')}
        >
          <Camera />
        </Tab>
        <Tab
          titleStyle={{ fontWeight: 'bold', fontSize: 10}}
          selectedTitleStyle={{ marginTop: -1, marginBottom: 6}}
          selected={selectedTab === 'calendar'}
          title={selectedTab === 'calendar' ? 'CALENDAR' : null}
          renderIcon={
            () =>
            <Icon
            containerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 12
            }}
            color={'#5e6977'}
            name='calendar'
            type='material-community'
            size={33}
            />
          }
          renderSelectedIcon={
            () =>
            <Icon
              color={'#6296f9'}
              name='calendar'
              type='material-community'
              size={30}
            />
        }
          onPress={() => this.changeTab('calendar')}
        >
          <View style={{ flex: 1, marginTop: 30, marginBottom: 1 }}>
          <Calendar />
          </View>
        </Tab>
      </Tabs>
    </View>
    </View>
    );
  }
} const mapStateToProps = ({ startup }) => {
  const { expanded } = startup;
  return { expanded };
};


export default connect(mapStateToProps, { open })(Taber);
