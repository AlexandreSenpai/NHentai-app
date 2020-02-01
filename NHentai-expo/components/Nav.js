import React, { Component } from 'react';
import { TextInput, Text, Image, View, TouchableHighlight } from 'react-native';
import api from '../services/api'
import logo from '../static/images/logo.png'
import styles from '../pages/styles/styles'

export default class Nav extends Component{
    constructor(props){
        super(props)
        this.state = {
            search_term: '',
            routeName: this.props.props.navigation.state.routeName,
        }
    }

    go_home = () => {
        this.props.props.navigation.navigate('Main');
    }

    random = async () => {
        if(this.state.routeName !== 'Gallery'){
            const res = await api.get('/random');
            const { id } = res.data;
            if(id){
                this.props.props.navigation.navigate('Gallery', { 'doujin': id })
            }
        }else{
            const res = await api.get('/random');
            const { id } = res.data;
            if(id){
                this.props.new_random(id)
            }
        }
    }
    
    handle_search = (evt) => {
        this.setState({
            search_term: evt,
        })
    }

    submit_search = async () => {
        const { search_term } = this.state;
        const order = 'popular';
        if(this.state.routeName !== 'Search'){
            const result = await api.get('/search', { params: { search_term, page: 1, order } })
            if(result){
                this.props.props.navigation.navigate('Search', { search_term, result, order })
            }
        }else{
            this.props.new_search(search_term, order)
        }
    }

    render(){
        return(
            <View style={styles.navbar}>
                <TouchableHighlight onPress={this.go_home.bind(this)} style={styles.logo_holder}>
                    <Image style={styles.logo_holder_image} source={logo}/>
                </TouchableHighlight>
                <View style={styles.search_holder}>
                    <TextInput onSubmitEditing={this.submit_search.bind(this)} onChangeText={this.handle_search.bind(this)} style={styles.search_input}/>
                </View>
                <View style={styles.menu_holder}>
                    <TouchableHighlight onPress={this.random.bind(this)}>
                        <Text style={styles.menu_item}>Random</Text>
                    </TouchableHighlight>
                    <Text style={styles.menu_item}>Info</Text>
                </View>
            </View>
        );
    };
};