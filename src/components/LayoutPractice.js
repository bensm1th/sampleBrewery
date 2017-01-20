import React, { Component } from 'react';
import { Text, View } from 'react-native';

class LayoutPractice extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View>
                    <Text>Top</Text>
                </View>
                <View style={styles.middle}>
                    <View style={styles.middleItem}>
                        <Text>Column A</Text>
                    </View>
                    <View style={styles.middleItem}> 
                        <Text>Column B</Text>
                    </View>
                    <View style={styles.middleItem}>
                        <Text>Column C</Text>
                    </View>
                </View>
                <View>
                    <Text>Bottom</Text>
                </View>
            </View>
        );
    }
}

const styles = {
  mainContainer: {
      backgroundColor: 'lightgrey',
      flex: 1,
      flexDirection: 'column'
  },
  middle: {
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  middleItem: {
      margin: 5,
  }
};

export default LayoutPractice;
