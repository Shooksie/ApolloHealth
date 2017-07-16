import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import {
  Card,
  ListItem,
  Button,
  Grid,
  Col,
  Row,
  Text,
  Divider} from 'react-native-elements';


class ToDoCard extends Component {
  render(){
    return(
      <Card
      title='To Do'
      containerStyle={{ borderRadius: 5, padding: 1 }}
      wrapperStyle={{ flexDirection: 'column', padding: 0, paddingBottom: 3, paddingTop: 4 }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
          borderRightWidth: 1
        }} >
          <View style={{ borderBottomWidth: 1 }}>
            <Text h1>Today</Text>
            </View>
          <View>
          <Text>August 21st</Text>
          </View>
        </View>
        <View style={{ flex: 4}}>
          <ListItem pharmacy
            rightIcon={{
              name: 'stethoscope',
              type:'material-community',
              color: 'black'
            }}
            wrapperStyle={{ marginLeft: 0, marginBottom: 0}} title='Doctors Vist ' subtitle='10:30pm' />
          <ListItem
            rightIcon={{ name: 'pharmacy',
            type:'material-community',
            color: 'black'
           }}
            wrapperStyle={{ marginLeft: 0, marginBottom: 0}} title='Refill Ready' subtitle='5:00pm' />
          <View title='View More'style={{ alignItems: 'flex-end'}}>
            <Button title='View More'
              buttonStyle={{ backgroundColor: 'white'}}
              color={'black'}
             />
          </View>
        </View>
      </View>
      </Card>

  );
  }
}

export default ToDoCard;

/*  <Col size={1}>
    <Row size={1}>
      <Text>Whats due?</Text>
    </Row>
    <Row size={4}>
      <Col size={10}>
        <Text>Today</Text>
        <Text>August 21st</Text>
      </Col>
      <Col size={10}>
        <ListItem title='Doctors Vist' subtitle='10:30pm' />
        <ListItem title='Refill Ready' subtitle='5:00pm' />
      </Col>
    </Row>
    <Grid>
      <Row containerStyle={{ backgroundColor: 'red'}} size={1}>
       <Text> "Hello" </Text>
      </Row>
      <Row containerStyle={{ backgroundColor: 'black'}} size={3}>
        <Col containerStyle={{ backgroundColor: 'white'}}></Col>
        <Col containerStyle={{ backgroundColor: 'green'}}></Col>
      </Row>
    </Grid>
  </Col> */
