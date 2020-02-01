import React, { Component } from 'react';
import { View, Text, ScrollView, Button, ActivityIndicator } from 'react-native';
import api from '../services/api.js';
import Nav from '../components/Nav';
import MiniBox from '../components/MiniBox';
import styles from './styles/styles';

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
        current_page: [],
        youre_here: 1,
        total_pages: 0,
        loading: false,
        primary_color: '#ED2553',
    }
  }

  componentDidMount(){
    this.setState({
      loading: true,
    }, async () => {
      const req = await api.get('/home_page', { params: { page: this.state.youre_here } })
      if(req){
        const data = req.data;
        this.setState({
          current_page: data.results.splice(0, 24),
          total_pages: data.num_pages,
          loading: false,
        });
      }
    })
  }

  load_new_data(){
    this.setState({
      loading: true,
    }, async () => {
      const req = await api.get('/home_page', { params: { page: this.state.youre_here } })
      if(req){
        const data = req.data;
        this.setState({
          current_page: data.results.splice(0, 24),
          total_pages: data.num_pages,
          loading: false,
        });
      }
    })
  }

  prev_page = () => {
    if(this.state.youre_here > 1){
      this.setState({
        youre_here: this.state.youre_here - 1
      }, () => {
        this.load_new_data()
      })
    }
  }

  next_page = () => {
    if(this.state.youre_here < this.state.total_pages){
      this.setState({
        youre_here: this.state.youre_here + 1
      }, () => {
        this.load_new_data()
      })
    }
  }

  render(){
    return(
      <View style={[styles.main_background, styles.main]}>
          <Nav props={this.props} />
          <ScrollView contentContainerStyle={styles.content}>
            {this.state.loading ? <ActivityIndicator size='large' color={this.state.primary_color} /> : null}
            {
                this.state.current_page.length > 0 && !this.state.loading
                ? this.state.current_page.map(e => (<MiniBox props={this.props} id={e.id} images={e.thumbnail.s} lang={e.language} title={e.title} key={e.id} />))
                : null
            }
          </ScrollView>
          <View style={styles.pagination_holder}>
              <Button color={this.state.primary_color} onPress={this.prev_page.bind(this)} title='Anterior' />
              <Text style={styles.pagination_text}>{this.state.youre_here} de {this.state.total_pages}</Text>
              <Button color={this.state.primary_color} onPress={this.next_page.bind(this)} title='Próximo' />
          </View>
      </View>
    );
  };
}
