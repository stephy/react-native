'use strict';

var React = require('react-native');
var {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} = React;

var AddScreen = React.createClass({
  render: function() {
    return (
    <View style={styles.container}>
      <Text>
        Add!
      </Text>
    </View>
    );
  }
});


var styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  }
});

module.exports = AddScreen;