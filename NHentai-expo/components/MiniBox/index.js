import React, { useState } from 'react';

import cn from '../../assets/cn.png';
import en from '../../assets/en.png';
import jp from '../../assets/jp.png';
import no_content from '../../assets/no-content.png';

import { BoxContainer, ImageButton, Image, BoxDescHolder, Title, LangImage } from './styles';

export default function MiniBox({ navigation, title, id, thumb, source_lang }){

    const [ image, setImage ] = useState(thumb ? { uri: thumb } : no_content);
    const [ lang, setLang ] = useState(source_lang || 'english');
    const [ languages, setLanguages ] = useState({ 'english': en, 'japanese': jp, 'chinese': cn });

    const navigate = () => {
        if(id){
            const { navigate } = navigation;
            navigate('DoujinInfo', { doujin: id })
        }
    }

    return(
        <BoxContainer>
            <ImageButton onPress={navigate}>
                <Image source={ image } />
            </ImageButton>
            <BoxDescHolder>
                <LangImage source={ languages[lang] } /><Title numberOfLines={1}>{title}</Title>
            </BoxDescHolder>
        </BoxContainer>
    );
    
}