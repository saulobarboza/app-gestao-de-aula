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
    alignItems: 'center',
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
    alignItems: 'flex-start'
  },

  description: {
    fontSize: 38,
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