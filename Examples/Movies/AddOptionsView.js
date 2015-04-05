'use strict';

var React = require('react-native');
var {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Navigator
} = React;

var IMAGE_PATH = 'http://www.stephanimoroni.com/kalendar/images/';

var ButtonOption = require('./ButtonOption');
var AddOptionsView = React.createClass({
	getInitialState: function(){
        return {
        	action: ''
        }  
    },
	 _onPressButton: function(action) {
	 	this.state.action = 'Hello';

	 	switch(action) {
	 		case 'share':
	 			console.log('>>> share');
	 			break;
	 		default:
	 			break;
	 	}
	},
	render: function() {
		return(
		<View>
			 <TouchableHighlight style={styles.button} onPress={() => this.props.handleClick('create')}>
			 	<View style={styles.create}>
			 		<ButtonOption 
			 			imagePath={IMAGE_PATH + 'create@2x.png'}
			 			description='Create Calendar'
			 			iconColor='#f8017b'>
			 		</ButtonOption>
			 	</View>
			</TouchableHighlight>

			 <TouchableHighlight style={styles.button} onPress={() => this.props.handleClick('join')}>
			 	<View style={styles.join}>
			 		<ButtonOption 
			 			imagePath={IMAGE_PATH + 'join@2x.png'}
			 			description='Join Calendar'
			 			iconColor='#b642ff'>
			 		</ButtonOption>
			 	</View>
			 </TouchableHighlight>

			 <TouchableHighlight style={styles.button} onPress={() => this.props.handleClick('share')}>
			 	<View style={styles.share}>
			 		<ButtonOption 
			 			imagePath={IMAGE_PATH + 'share@2x.png'} 
			 			description='Share Calendar'
			 			iconColor='#5cca4a'>
			 		</ButtonOption>
			 	</View>
			 </TouchableHighlight>

			 <TouchableHighlight style={styles.button} onPress={() => this.props.handleClick('add')}>
			 	<View style={styles.addEvent}>
			 		<ButtonOption 
			 			imagePath={IMAGE_PATH + 'add@2x.png'} 
			 			description='Add Event'
			 			iconColor='#17d3d5'>
			 		</ButtonOption>
			 	</View>
			 </TouchableHighlight>
		</View>
		);
	}
});

var styles = StyleSheet.create({
  button: {
  	width: 60,
    height: 60
  },
  create: {
    top: 180,
    left: -110
  },
  join: {
    top: 90,
    left: -40
  },
  share: {
    top: 30,
    left: 30
  },
  addEvent: {
    top: 0,
    left: 100
  },


});

module.exports = AddOptionsView;