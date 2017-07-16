import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Timeline from 'react-native-timeline-listview'

class Scheduling extends Component {
  constructor(){
    super()
    this.data = [
      {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
      {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
      {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
      {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
      {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
    ]
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, marginTop: 40, paddingTop: 20, marginRight: 15, marginLeft: 15 }}>
      <Calendar
          // Specify style for calendar container element. Default = {}
          style={{
            borderWidth: 0.5,
            borderRadius: 5,
            borderColor: 'gray',
            height: 350
          }}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          theme={{
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'blue',
            monthTextColor: 'black'
          }}
        />
        <View style={{ marginTop: 20}}>
        <Timeline
              data={this.data}
            />
        </View>
    </ScrollView>
    );
  }
}

export default Scheduling;
