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
        total_results: 0,
        res: this.props.navigation.getParam('result'),
        order: this.props.navigation.getParam('order'),
        search_term: this.props.navigation.getParam('search_term'),
        loading: false,
        primary_color: '#ED2553',
    }
  }

  componentDidMount(){
    this.setState({
      loading: true,
    }, async () => {
      if(this.state.res.data){
        this.setState({
          current_page: this.state.res.data.results,
          total_pages: this.state.res.data.num_pages,
          total_results: this.state.res.data.num_results,
          ordering: this.state.order,
          loading: false,
        });
      }
    }) 
  }

  load_new_data(){
    this.setState({
      loading: true,
    }, async () => {
      const search_term = this.state.search_term;
      const order = this.props.navigation.getParam('order');
      const req = await api.get('/search', { params: { search_term, order, page: this.state.youre_here } })
      if(req){
        const data = req.data;
        this.setState({
          current_page: data.results,
          total_pages: data.num_pages,
          ordering: order,
          loading: false,
        });
      }
    })
  }

  restart_state(search_term, order){
      this.setState({
        current_page: [],
        youre_here: 1,
        total_pages: 0,
        total_results: 0,
        search_term: search_term,
        loading: true,
      }, async () => {
        const req = await api.get('/search', { params: { search_term, order, page: this.state.youre_here } })
        if(req){
            const data = req.data;
            this.setState({
                current_page: data.results,
                total_pages: data.num_pages,
                total_results: data.num_results,
                ordering: order,
                loading: false,
            });
        }
      })
  }

  prev_page = () => {
    if(this.state.youre_here > 1){
      this.setState({
        youre_here: this.state.youre_here - 1,
      }, () => {
        this.load_new_data()
      })
    }
  }

  next_page = () => {
    if(this.state.youre_here < this.state.total_pages){
      this.setState({
        youre_here: this.state.youre_here + 1,
      }, () => {
        this.load_new_data()
      })
    }
  }

  render(){
    return(
        <View style={[styles.main_background, styles.main]}>
            <Nav new_search={this.restart_state.bind(this)} props={this.props} />
            <View><Text style={styles.pagination_text}>Resultados: {this.state.total_results} - Filtro: {this.state.order}</Text></View>
            <ScrollView contentContainerStyle={styles.content}>
                { this.state.loading ? <ActivityIndicator size='large' color={this.state.primary_color} /> : null }
                {
                    this.state.current_page.length > 0 && !this.state.loading
                    ? this.state.current_page.map(e => (<MiniBox props={this.props} id={e.id} lang={e.language} images={e.thumbnail.s} title={e.title} key={e.id} />))
                    : null
                }
            </ScrollView>
            <View style={styles.pagination_holder}>
                <Button color={'#EB2754'} onPress={this.prev_page.bind(this)} title='Anterior' />
                <Text style={styles.pagination_text}>{this.state.youre_here} de {this.state.total_pages}</Text>
                <Button color={'#EB2754'} onPress={this.next_page.bind(this)} title='Próximo' />
            </View>
        </View>
    );
  };
}
