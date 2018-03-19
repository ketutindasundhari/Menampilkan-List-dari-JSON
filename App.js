import React  from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
//import HitungVolumeBalok from './src/HitungVolumeBalok';
import Header from './src/header';
import Footer from './src/footer';
import Sales from './src/Sales';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
      < Header HeaderText={'Header'} />
      < Sales />
      <Footer footerText={'Footer'} />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain:{
    paddingTop: 20;
    flex: 1,
    backgroundColor: #0091EA;

  }
})
AppRegistry.registerComponent('AppForm2', () => HitungLuasSegitiga);
