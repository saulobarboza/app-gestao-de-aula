import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 70,
    paddingTop: Constants.statusBarHeight + 540,
    backgroundColor: '#333333',
  },
  
  title: {
    marginBottom: 60,
    fontSize: 100,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  listItemBox: {
    backgroundColor: '#ffffff',
    width: 940,
    borderRadius: 30,
    padding: 40,
    marginBottom: 70
  },

  listItemBoxLineOne: {
    height: 60,
    flexDirection: 'row',
    alignContent: 'flex-end',
  },

  playButton: {
    marginRight: 665,
  },

  settingsButton: {
    marginRight: 15
  },

  xButton: {
    backgroundColor: '#e02041',
    width: 60,
    height: 60,
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },

  listItemBoxLineTwo: {
    height: 160,
    flexDirection: 'row',
    alignItems: 'center',
  },

  description: {
    fontFamily: 'arial',
    fontSize: 40,
    lineHeight: 60,
    color: '#333333',
  },

  editButton: {
    marginLeft: 20,
  },

  listItemBoxLineThree: {
    height: 40,
    flexDirection: 'row',
  },

  clockIcon: {
    paddingRight: 10,
    color: '#333333'
  },

  timerText: {
    fontFamily: 'arial',
    fontSize: 40,
    color: '#333333',
  },

  addNewClassButton: {
    position: 'absolute',
    right: 70,
    bottom: 140,
    padding: 50,
    backgroundColor: '#28e020',
    borderRadius: 100,
  },
});