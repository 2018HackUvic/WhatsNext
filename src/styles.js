import React from 'react-native';
import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskContainer: {
    backgroundColor: '#f2f2f2',
    flex: 1
  },
  listview: {
    flex: 1
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingTop: 14,
    paddingBottom: 16,
    flexDirection: 'row'
  },
  liContainer: {
    flex: 2
  },
  liTask: {
    color: '#333',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 16,
    paddingLeft: 10
  },
  liTime: {
    color: '#333',
    width: 100,
    textAlign: 'center',
    fontSize: 16,
    paddingRight: 10
  },
  navbarButtonLeft: {
    color: '#fff',
    width: 60,
    textAlign: 'center',
    fontSize: 20,
    paddingLeft: 10
  },
  navbarButtonRight: {
    color: '#fff',
    width: 60,
    textAlign: 'center',
    fontSize: 20,
    paddingRight: 10
  },
  navbarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 20
  },
  statusbar: {
    backgroundColor: '#24CE84',
    paddingTop: 30,
    paddingBottom: 15,
    flexDirection: 'row'
  },
  center: {
    textAlign: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  action: {
    backgroundColor: '#24CE84',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
})

module.exports = styles;