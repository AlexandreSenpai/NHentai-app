import React, { useState } from 'react';
import api from '../../services/api'
import logo from '../../assets/logo.png'

import { NavContainer, LogoHolder, Image, SearchHolder, TextInput, MenuHolder, Button, MenuItem } from './styles';

export default function Nav({ route, navigation, setQuery, setDoujin }){
    
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ random, setRandom ] = useState('');

    const handle_search = (term) => {
        setSearchTerm(term);
    }

    const handle_submit = () => {
        if(searchTerm !== '' && route.name !== 'Search'){
            navigation.navigate('Search', { query: searchTerm });
        }else{
            if(route.name === 'Search'){
                setQuery(searchTerm);
            }
        }
    }

    const get_random = async () => {
        const random = await api.get('/random')
        const data = random.data;
        if(route.name !== 'DoujinInfo'){
            navigation.navigate('DoujinInfo', { doujin: data.id });
        }else{
            setDoujin(data.id);
        }
    }

    const go_home = () => {

    }

    return(
        <NavContainer>
            <LogoHolder onPress={go_home}>
                <Image source={logo}/>
            </LogoHolder>
            <SearchHolder>
                <TextInput onSubmitEditing={handle_submit} onChangeText={handle_search} />
            </SearchHolder>
            <MenuHolder>
                <Button onPress={get_random}>
                    <MenuItem>Random</MenuItem>
                </Button>
                {/* <Button>
                    <MenuItem>Favoritos</MenuItem>
                </Button> */}
            </MenuHolder>
        </NavContainer>
    );

}