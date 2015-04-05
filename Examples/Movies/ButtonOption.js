'use strict';

var React = require('react-native');
var {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} = React;

var iconColor = '#FFF';
var ButtonOption = React.createClass({
	render: function() {
		return (
		<View style={styles.buttonContainer}>
			<View style={ {
					width: 40,
					height: 40,
					marginLeft: 10,
					marginBottom: 3,
					borderRadius: 20,
					backgroundColor: this.props.iconColor,
					padding: 10
				} 
			}>
				<Image style={styles.image} source={{uri: this.props.imagePath }} />
			</View>
			<View>
				<Text style={styles.buttonLabel}>{this.props.description.toUpperCase()}</Text>
			</View>
		</View>
		);
	}
});


var styles = StyleSheet.create({
	buttonContainer: {
		width: 50,
		height: 50,
		textAlign: 'center'
	},
	image: {
		width: 20,
		height: 20,
	},
	iconContent: {
		textAlign: 'center',
		fontSize: 30
	},
	buttonLabel: {
		fontSize: 10,
		color: '#FFF',
		width: 60,
		textAlign: 'center',
		fontFamily: 'Helvetica',
	}
});
module.exports = ButtonOption;