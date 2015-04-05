'use strict';

var React = require('react-native');
var {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} = React;

var ShareScreen = React.createClass({
  render: function() {
    return (
    <View style={styles.container}>
      <Text>
        Share!
      </Text>
    </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0)'
  }
});

module.exports = ShareScreen;