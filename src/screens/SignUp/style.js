import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  head: {
    // backgroundColor: '#00D09E',
  },

  heading: {
    paddingTop: 100,
    paddingBottom: 55,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'semibold',
  },

  form: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 15,
    paddingBottom: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#F1FFF3',
  },

  info: {
    fontSize: 15,
    marginTop: 14,
    paddingBottom: 8,
    marginLeft: 25,
  },

  information: {
    width: 347,
    height: 41,
    backgroundColor: '#DFF7E2',
    borderRadius: 50,
    paddingHorizontal: 20,
    fontSize: 18,

    // color : 'black'
  },

  terms: {
    paddingTop: 12,
  },

  // SignUp

  buttonView: {
    alignItems: 'center',
  },

  signupButton: {
    marginTop: 12,
    alignItems: 'center',
    padding: 12,
    width: 207,
    height: 45,
    backgroundColor: '#00D09E',
    borderRadius: 50,
  },

  signupButtonText: {
    fontSize: 20,
    fontWeight: '600',
  },

  // Login

  loginButton: {
    padding: 10,
  },

  loginText: {
    textAlign: 'center',
    fontSize: 15,
    paddingTop: 3,
  },

  loginButtonText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: 'blue',
  },

  errorMessage: {
    color: 'red',
    marginTop : 3,
    marginLeft : 20
  },
});

export default styles;
