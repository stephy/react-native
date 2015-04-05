'use strict';

var React = require('react-native');
var {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Navigator
} = React;

var AddOptionsView = require('./AddOptionsView');
var ShareScreen = require('./ShareScreen');
var CreateScreen = require('./CreateScreen');
var JoinScreen = require('./JoinScreen');
var AddScreen = require('./AddScreen');

var KalendarScreen = React.createClass({
  loadAddOptions: function() {
    if (this.state.showAddOptions === false) {
      this.setState({ showAddOptions: true });
    } 
  },

  _renderScene: function(screen) {

    switch(screen) {
      case 'share':
        return (route, navigator, onRef) => <ShareScreen title={route.title} ref={onRef} />
        break;
      case 'create':
        return (route, navigator, onRef) => <CreateScreen title={route.title} ref={onRef} />
        break;
      case 'join':
        return (route, navigator, onRef) => <JoinScreen style={styles.join} title={route.title} ref={onRef} />
        break;
      case 'add':
        return (route, navigator, onRef) => <AddScreen title={route.title} ref={onRef} />
        break;
      case 'events':
        return (route, navigator, onRef) => <EventsScreen title={route.title} ref={onRef} />
        break;
      default:
        break;
    }
    
  },

  getInitialState : function() {
    return {
      scene : this._renderScene('share'),
      showAddOptions: false
    };
  },

  handleClick : function(screen) {
    this.replaceState({
      scene : this._renderScene(screen),
      showAddOptions: false
    });
  },

  render: function() {
    return (
    <View style={styles.container}>
      <Image 
        style={styles.backdrop} 
        source={{uri: 'http://www.stephanimoroni.com/kalendar/images/app-bg.jpg'}} />
      <View style={styles.backdropView}>

        <View style={styles.content}>

          <Navigator
            initialRoute={{name: 'Share Scene', index: 0}}
            renderScene={this.state.scene}
          />
        </View>

        <View style={styles.sectionBottom}>
          <View style={styles.addOptions}>
            {this.state.showAddOptions ? <AddOptionsView handleClick={this.handleClick}></AddOptionsView> : null }
          </View>          
          <TouchableHighlight style={styles.button} onPress={ ()=> this.loadAddOptions() }>
          <Text style={styles.btnAdd}>+</Text>
          </TouchableHighlight>
        </View>
         
      </View> 
    </View>
    );
  }
});


var styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    textAlign: 'center'
  },
  backdrop: {
    height: 700
  },
  backdropView: {
    top: -600,
    height: 700,
  },
  btnAdd: {
    fontSize: 50,
    color: '#FFF',
    bottom: 0
  },
  addOptions: {
    height: 200
  },
  join: {
    backgroundColor: 'rgba(0,0,0,0)'
  },
  content: {
    height: 500,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  sectionBottom: {
    justifyContent: 'center',
    marginLeft: 180,
    top: -200
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0)'
  }
});

module.exports = KalendarScreen;