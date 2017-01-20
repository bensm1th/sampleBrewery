import React, { Component } from 'react';
import { View } from 'react-native';

class FlexDirectionBasics extends Component {
  render() {
    console.log('hello');
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        <View style={{ width: 75, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 25, height: 50, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}

export default FlexDirectionBasics;
