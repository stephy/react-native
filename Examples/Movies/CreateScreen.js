'use strict';

var React = require('react-native');
var {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} = React;

var CreateScreen = React.createClass({
  render: function() {
    return (
    <View style={styles.container}>
      <Text>
        Create!
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

module.exports = CreateScreen;