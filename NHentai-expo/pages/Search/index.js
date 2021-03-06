import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import api from '../../services/api.js';
import Nav from '../../components/Nav';
import MiniBox from '../../components/MiniBox';

import { MainContainer, ScrollableContainer, PaginationHolder, Button, ScrollableStylesheet, Text, HeaderHolder } from './styles';

export default function Search({ route, navigation }){
    
    const [ thumbs, setThumbs ] = useState([]);
    const [ totalPages, setTotalPages ] = useState(0);
    const [ totalResults, setTotalResults ] = useState(0);
    const [ page, setPage ] = useState(1);
    const [ primaryColor, setPrimaryColor ] = useState('#ED2553');
    const [ refreshing, setRefreshing ] = useState(false);
    const [ order, setOrder ] = useState('popular');
    const [ query, setQuery ] = useState(route.params ? route.params.query : '');

    useEffect(() => {
        api.get('/search', { params: { q: query, sort: order, page } }).then(res => {
            const data = res.data;
            setThumbs(data.doujins);
            setTotalPages(data.totalPages);
            setTotalResults(data.totalResults);
            setOrder(data.sort || 'Recente');
        })
    }, [ page, refreshing, query ])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
    
        wait(2000).then(() => setRefreshing(false));
    }, []);
    
    const wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    const previous_page = () => {
        if(page > 1){
            setPage(page - 1)
        }
    }

    const next_page = () => {
        if(page < totalPages){
            setPage(page + 1)
        }
    }

    return(
        <MainContainer>
            <Nav route={route} navigation={navigation} setQuery={setQuery} />
            <HeaderHolder><Text>Resultados: {totalResults} - Filtro: {order}</Text></HeaderHolder>
            <ScrollableContainer refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} contentContainerStyle={ScrollableStylesheet.flex}>
                {
                    thumbs.length > 0
                    ? thumbs.map(item => (
                        <MiniBox 
                        navigation={navigation} 
                        id={item.id} 
                        thumb={item.cover} 
                        source_lang={item.lang.toLowerCase()} 
                        title={item.title} 
                        key={`doujin_${item.id}_${Math.random()}`} 
                        />
                    ))
                    : null
                }
            </ScrollableContainer>
            <PaginationHolder>
                <Button color={primaryColor} onPress={previous_page} title='Anterior' />
                <Text>{page} de {totalPages}</Text>
                <Button color={primaryColor} onPress={next_page} title='Próximo' />
            </PaginationHolder>
        </MainContainer>
    );
}
