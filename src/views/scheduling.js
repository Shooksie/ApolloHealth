import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ScrollView, Text, View, StyleSheet, ListView } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import HourlySched from '../components/hourlySched';

class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      selectedDay: '2017-06-20',
      selectedMonth: '2017-06'
    };
  }

  renderDay(day) {
    console.log(day);
    if (day.month < 10) {
      console.log(String(day.month));
      this.setState({
        selectedDay: day.selectedDay,
        selectedMonth: '2017-0'.concat(String(day.month)) });
    } else {
      this.setState({
        selectedDay: day.selectedDay,
        selectedMonth: '2017-'.concat(String(day.month)) });
    }
  }
  render() {
    console.log(this.props.sched[this.state.selectedMonth][this.state.selectedDay]);
    return (
    <View style={{ flex: 1, paddingTop: 60 }}>
      <Calendar
        current={this.state.selectedDay}
        minDate={'2016-05-10'}
        maxDate={'2018-05-30'}
        onDayPress={(day) => { this.renderDay(day); }}
        monthFormat={'yyyy MM'}
        onMonthChange={(month) => { console.log('month changed', month); }}
        disableMonthChange={false}
        firstDay={1}
        markingType={'interactive'}

      />
      <ScrollView>
          {
            this.props.sched[this.state.selectedMonth][this.state.selectedDay].map(
              (item) => {
                return (<HourlySched time={item.time} busy={item.Busy} />)
              }
            )
          }
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});

const mapStateToProps = ({ currentDoc }) => {
  const { sched } = currentDoc;
  return { sched };
};
export default connect(mapStateToProps, {})(AgendaScreen);
