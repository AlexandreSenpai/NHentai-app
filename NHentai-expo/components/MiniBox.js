import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from '../pages/styles/styles';
import cn from '../assets/cn.png';
import en from '../assets/en.png';
import jp from '../assets/jp.png';

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      image: { uri: this.props.images },
      id: this.props.id,
      lang: this.props.lang,
      language: {
        'english': en,
        'japanese': jp,
        'chinese': cn,
      }
    }
  }

  navigate = () => {
    if(this.state.id){
      const { navigate } = this.props.props.navigation;
      navigate('Gallery', { doujin: this.state.id })
    }
  }

  render(){
    return(
      <View style={styles.mini_box}>
        <TouchableHighlight onPress={this.navigate.bind(this)} style={styles.mini_box_image_holder}>
            <Image style={styles.mini_box_image} source={this.state.image} />
        </TouchableHighlight>
        <View style={styles.mini_box_desc}>
            <Image style={styles.lang} source={this.state.language[this.state.lang]} /><Text numberOfLines={1} style={styles.mini_box_text}>{this.props.title}</Text>
        </View>
      </View>
    );
  };
}