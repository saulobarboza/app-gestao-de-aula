import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 140,
    backgroundColor: '#333333',
    alignItems: 'center',
  },

  title: {
    marginBottom: 30,
    fontSize: 36,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  description: {
    fontSize: 14,
    lineHeight: 24,
    color: '#666666',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  bigPlusCircleIcon: {
    marginTop: 60,
    marginBottom: 60,
    padding: 50,
    backgroundColor: '#474747',
    borderRadius: 130
  },

  addNewClassButton: {
    position: 'absolute',
    right: 30,
    bottom: 50,
    padding: 15,
    backgroundColor: '#28e020',
    borderRadius: 30,
  }
});