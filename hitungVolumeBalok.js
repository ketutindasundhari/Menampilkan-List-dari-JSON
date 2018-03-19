import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungLuasSegitiga extends Component {
  constructor(props){
    super(props)
    this.state = {
      panjang: 0,
      lebar: 0,
      tinggi: 0,
      volume: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 35, backgroundColor: 'gray' }}>

        <View style={{ backgroundColor: 'tomato' }}>
           <Text style={{ padding: 22, fontSize: 22, color: 'gold', textAlign: 'center' }} >
            Menghitung Volume Balok
          </Text>
         </View>

        <View style={{ margin: 35, padding: 15, backgroundColor: 'skyblue' }}>
            <TextInput style={{ height: 70 }}
              placeholder="Masukkan panjang"
              onChangeText={(panjang) => this.setState({ panjang })}
              keyboardType='numeric'
            />
            <TextInput style={{ height: 70}}
              placeholder="Masukkan  lebar"
              onChangeText={(lebar) => this.setState({ lebar })}
              keyboardType='numeric'
            />
            <TextInput style={{ height: 70}}
              placeholder="Masukkan  tinggi"
              onChangeText={(tinggi) => this.setState({ tinggi })}
              keyboardType='numeric'
            />

            <Button
              onPress={() => this.setState({
                volume: (this.state.panjang*this.state.lebar*this.state.tinggi)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{ margin: 20, backgroundColor: 'coral' }}>
          <Text style={{ padding: 10, fontSize: 22 }} >
              Panjang ={this.state.panjang} {"\n"}
              Lebar ={this.state.lebar} {"\n"}
              Tinggi ={this.state.tinggi} {"\n"}
              Volume = {this.state.volume}
          </Text>
         </View>

   </View>

    );
  }

}
AppRegistry.registerComponent('AppForm2', () => HitungLuasSegitiga);
