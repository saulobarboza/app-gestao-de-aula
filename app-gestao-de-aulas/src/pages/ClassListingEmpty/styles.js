import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 70,
    paddingTop: Constants.statusBarHeight + 540,
    backgroundColor: '#333333',
    alignItems: 'center',
  },

  title: {
    marginBottom: 60,
    fontSize: 100,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  description: {
    fontSize: 40,
    lineHeight: 60,
    color: '#666666',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  bigPlusCircleIcon: {
    marginTop: 60,
    marginBottom: 60,
    padding: 180,
    backgroundColor: '#474747',
    borderRadius: 360
  },

  addNewClassButton: {
    position: 'absolute',
    right: 70,
    bottom: 140,
    padding: 50,
    backgroundColor: '#28e020',
    borderRadius: 100,
  }
});