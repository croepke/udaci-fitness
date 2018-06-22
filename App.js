import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import AddEntry from './components/AddEntry';

export default class App extends React.Component {

  render() {
    return (
      <View>
        <AddEntry />
      </View>
    );
  }
}
