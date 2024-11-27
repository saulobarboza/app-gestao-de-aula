import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  navigationButton: {
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
    marginBottom: 300,
    fontSize: 100,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  formLabel: {
    marginBottom: 30,
    fontSize: 40,
    lineHeight: 60,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'left'
  },

  inputField: {
    marginBottom: 70,
    padding: 30,
    width: 940,
    height: 150,
    borderRadius: 20,
    borderStyle: 'solid',
    fontSize: 40,
    fontWeight: '400',
    backgroundColor: '#FFFFFF'
  },

  inputFieldMessageError: {
    marginBottom: 70,
    fontSize: 32,
    lineHeight: 60,
    color: '#E02041',
    fontWeight: 'bold',
    textAlign: 'left'
  },

  submitButton: {
    height: 150,
    borderRadius: 20,
    borderWidth: 0,
    backgroundColor: '#28E020',
    alignItems: 'center',
    justifyContent: 'center',
  },

  submitButtonText: {
    fontSize: 40,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#FFFFFF',
  }
});