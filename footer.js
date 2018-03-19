import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Footer = (props) => {
  const{textStyle, backFooter} = styles;

  return(
    <view style={backFooter}>
      <Text style={textStyle}>{props.footerText}</Text>
    </view>
  );
};

const styles={
  backFooter{
    backgroundColor: "#FF5252",
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
export default Footer;
