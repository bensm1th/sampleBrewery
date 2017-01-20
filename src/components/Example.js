import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import SideMenu from 'react-native-side-menu';

import { increment } from './actions';
import ConnectedNavBar from './MyNavBar';
import Button from './Button';
import Menu from './Menu';

class Example extends Component {

    state = {
        isOpen: false,
        selectedItem: 'About',
    };

    onMenuItemSelected = (item) => {
        this.setState({
        isOpen: false,
        selectedItem: item,
        });
    }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  handlePress(e) {
    this.toggle();
  }

    render() {
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={(isOpen) => this.updateMenuState(isOpen)}
            >
                <View>
                    <Text>
                        Some content goes here!
                    </Text>
                </View>
            </SideMenu>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 30, 
        color: 'red'
    },
    button: {
    position: 'absolute',
    top: 40,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  containerBasic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    color: 'red',
  },
};


const mapStateToProps = (state) => {
    return { counter: state.increment.counter };
};

export default connect(mapStateToProps, { increment })(Example);
