'use strict';

var React = require('react-native');
var {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight
} = React;

var JoinScreen = React.createClass({
  render: function() {
    return (
    <View style={styles.container}>
      <Text style={styles.h1}>
        JOIN
      </Text>
      <Text style={styles.p}>
        Enter calendar code:
      </Text>

      <TextInput
        style={styles.codeInput}
        onChangeText={(text) => this.setState({input: text})}
      />

    </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0)'
  },
  h1: {
    flex: 1,
    color: '#FFF',
    textAlign: 'center',
    fontSize: 30,
  },
  p: {
    flex: 1,
    textAlign: 'center',
    color: '#FFF'
  },
  codeInput: {
    height: 80,
    width: 200,
    marginLeft: 90,
    marginTop: 10,
    borderColor: '#FFF',
    borderRadius: 10,
    borderWidth: 1,
    color: '#FFF',
    fontSize: 50,
    textAlign: 'center'
  }
});

module.exports = JoinScreen;