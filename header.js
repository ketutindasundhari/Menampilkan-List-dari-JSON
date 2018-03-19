import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
  const{textStyle, backHeader} = styles;

  return(
    <view style={backHeader}>
      <Text style={textStyle}>{props.headerText}</Text>
    </view>
  );
};

const styles={
  backHeader{
    backgroundColor: "#FF1744",
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    position: 'relative',
    marginTop: 10
  },
  textStyle:{
    fontSize:25,
    color:white,
    textAlign: 'center'
  }
}
export default Header;
