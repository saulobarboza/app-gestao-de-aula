import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  arrowLeftBackButton: {
    paddingTop: Constants.statusBarHeight + 40,
    paddingHorizontal: 24,
    backgroundColor: '#333333',
  },

  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 24,
    backgroundColor: '#333333',
    alignItems: 'center',
  },

  title: {
    marginBottom: 15,
    fontSize: 34,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  subtitle: {
    marginBottom: 30,
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    alignItems: 'flex-start'
  },

  description: {
    fontSize: 14,
    lineHeight: 24,
    color: '#666666',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  bigPlusCircleIcon: {
    marginTop: 40,
    marginBottom: 40,
    padding: 50,
    backgroundColor: '#474747',
    borderRadius: 130
  },

  addNewClassButton: {
    position: 'absolute',
    right: 30,
    bottom: 50,
    padding: 15,
    backgroundColor: '#28E020',
    borderRadius: 30,
  }
});