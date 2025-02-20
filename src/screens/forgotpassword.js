import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import auth from '@react-native-firebase/auth';
export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }
  forgotPassword = async (email) => {
    console.log(email);
    if (email !== '') {
      try {
        await auth().sendPasswordResetEmail(email);
        this.props.navigation.navigate('login');
      } catch (e) {
        Alert.alert(e.message);
      }
    } else {
      Alert.alert('Field empty');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Password</Text> */}
        <TextInput
          style={{
            padding: 10,
            borderWidth: 1,
            width: Dimensions.get('screen').width - 30,
            borderRadius: 10,
            margin: 20,
          }}
          placeholder="Enter email-Id"
          value={this.state.email}
          keyboardType="email-address"
          onChangeText={(email) => this.setState({email})}
        />
        <TouchableOpacity
          style={{padding: 20, backgroundColor: '#930b0d', borderRadius: 10}}
          onPress={() => this.forgotPassword(this.state.email)}>
          <Text style={{color: '#FFF'}}>Change Password</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
