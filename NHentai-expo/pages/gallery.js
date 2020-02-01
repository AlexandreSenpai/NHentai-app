import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, ActivityIndicator } from 'react-native';
import api from '../services/api.js';
import Nav from '../components/Nav';
import styles from './styles/styles';
import { ScrollView } from 'react-native-gesture-handler';

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
        data: undefined,
        index: 0,
        loading: false,
        primary_color: '#ED2553',
    }
  }

    componentDidMount(){
        this.setState({
            loading: true,
        }, async () => {
            const id = this.props.navigation.getParam('doujin');
            if(id){
                const req = await api.get('/gallery', { params: { id }})
                if(req){
                    const res = req.data
                    this.setState({
                        data: res,
                        loading: false,
                    })
                }
            }else{
                this.props.navigation.goBack();
            }
        })
    }

    new_random(id){
        this.setState({
            loading: true,
        }, async () => {
            if(id){
                const req = await api.get('/gallery', { params: { id }})
                if(req){
                    const res = req.data
                    this.setState({
                        data: res,
                        index: 0,
                        loading: false,
                    })
                }
            }
        })
    }

    next_image = (pages) => {
        if(this.state.index < this.state.data.num_pages - 1){
            this.setState({
                index: this.state.index + pages,
                loading: true,
            }, () => 
                this.setState({
                    loading: false,
                })
            )
        }
    }

    prev_image = (pages) => {
        if(this.state.index > 0){
            this.setState({
                index: this.state.index - pages,
                loading: true,
            }, () => 
                this.setState({
                    loading: false,
                })
            )
        }
    }

    MenuComponent = () => {
        return(
            <View style={styles.gallery_point}>
                <TouchableHighlight onPress={() => { this.prev_image(this.state.index) }} >
                    <Text style={styles.pointer}>{'<<'}</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { this.prev_image(1) }} >
                    <Text style={styles.pointer}>{'<'}</Text>
                </TouchableHighlight>
                <Text style={styles.pointer}>{this.state.index} de {this.state.data.num_pages - 1}</Text>
                <TouchableHighlight onPress={() => { this.next_image(1) }} >
                    <Text style={styles.pointer}>{'>'}</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { this.next_image(((this.state.data.num_pages - 1) - this.state.index)) }} >
                    <Text style={styles.pointer}>{'>>'}</Text>
                </TouchableHighlight>
            </View>
        )
    }

    ImageComponent = () => {
        return(
            <View style={styles.gallery_holder}>
                <this.MenuComponent />
                <TouchableHighlight onPress={() => { this.next_image(1) }}>
                    <Image style={styles.gallery_image} source={ { uri: this.state.data.images.pages[this.state.index] } } alt=""/>
                </TouchableHighlight>
                <this.MenuComponent />
            </View>
        )
    }

    render(){
        return(
        <View style={[styles.main_background, styles.main]}>
                <Nav new_random={this.new_random.bind(this)} props={this.props}/>
                <ScrollView contentContainerStyle={styles.content}>
                    {this.state.loading ? <ActivityIndicator color={this.state.primary_color} size='large' /> : null}
                    {
                        this.state.data && !this.state.loading 
                        ? <this.ImageComponent />
                        : null
                    }
                </ScrollView>
        </View>
        );
    };
}
