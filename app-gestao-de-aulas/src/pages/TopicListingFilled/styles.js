import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  arrowLeftBackButton: {
    paddingHorizontal: 70,
    paddingTop: Constants.statusBarHeight + 70,
    backgroundColor: '#333333',
  },

  container: {
    flex: 1,
    paddingTop: 400,
    paddingHorizontal: 70,
    backgroundColor: '#333333',
  },
  
  title: {
    marginBottom: 60,
    fontSize: 90,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  subtitle: {
    marginBottom: 60,
    fontSize: 48,
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

  settingsButton: {
    paddingLeft: 725,
    paddingRight: 15
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
    paddingLeft: 20,
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