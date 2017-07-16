import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
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
  componentWillReceiveProps(nextProps) {
      this.createDataSource(nextProps);
  }
  createDataSource({ pools }) {
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(pools);
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    console.log(item);
    return (
      <View style={[styles.item, { height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
  renderDay(day) {
    this.setState({ selectedDay: '2017-'.concat(String(day.month), '-', String(day.day)) })
  }
  render() {
    return (
    <View style={{ flex: 1 }}>
      <Calendar
        current={this.state.selectedDay}
        minDate={'2016-05-10'}
        maxDate={'2018-05-30'}
        onDayPress={(day) => { this.renderDay(day); }}
        monthFormat={'yyyy MM'}
        onMonthChange={(month) => {console.log('month changed', month)}}
        hideArrows={true}
        renderArrow={(direction) => (<Arrow />)}
        hideExtraDays={true}
        disableMonthChange={true}
        firstDay={1}
      />
      <ScrollView>
        {
          this.props.sched[this.state.selectedMonth][this.state.selectedDay].map(
            (item) => {
              return (
                <HourlySched time={item.time} busy={item.busy} />
              )
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
