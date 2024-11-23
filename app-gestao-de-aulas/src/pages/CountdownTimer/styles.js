import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  navigationButtons: {
    paddingHorizontal: 70,
    paddingBottom: 70,
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 70,
    backgroundColor: '#28E020'
  },

  menuListingButton: {
    paddingLeft: 740,
  },

  title: {
    paddingTop: 100,
    paddingBottom: 100,
    fontSize: 56,
    color: '#333333',
    backgroundColor: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  timerBackground:{
    position: 'absolute',
    top: 332,
    width: 800,
    height: 800,
    borderRadius: 400,
    backgroundColor: '#333333',
  },

  hourTimer: {
    position: 'absolute',
    top: 500,
    fontSize: 200,
    color: '#FFFFFF',
  },


  minuteTimer: {
    position: 'absolute',
    top: 720,
    fontSize: 120,
    color: '#999999',
  },

  container: {
    flex: 1,
    paddingHorizontal: 70,
    backgroundColor: '#28E020',
    alignItems: 'center',
    justifyContent: 'center'
  },

  playOrPauseButton: {
    paddingTop: 300
  }
});