import React, { useState } from 'react';
import { TouchableHighlight, Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import Nav from '../../components/Nav';
import DoujinMenu from '../../components/DoujinMenu';
import no_content from '../../assets/no-content.png';

import { GalleryContainer, GalleryContent, GalleryImageHolder, GalleryImage } from './styles';

export default function Gallery({ route, navigation }){

    const { source_images, pages, index } = route.params;

    const [ page, setPage ] = useState(index || 0);
    const [ totalPages, setTotalPages ] = useState(pages || 0);
    const [ images, setImages ] = useState(source_images || []);

    const next_page = (count) => {
        if(page + count <= totalPages - 1){
            setPage(page + count);
        }else{
            setPage(totalPages - 1)
        }
    }

    const previous_page = (count) => {
        if(page - count >= 0){
            setPage(page - count);
        }else{
            setPage(0)
        }
    }

    const ImageComponent = () => {

        console.log()

        return(
            <GalleryImageHolder>
                <DoujinMenu previous_page={previous_page} next_page={next_page} totalPages={totalPages} page={page} />
                <ImageZoom 
                    cropWidth={Dimensions.get('window').width} 
                    cropHeight={Dimensions.get('window').height - 130} 
                    imageWidth={Dimensions.get('window').width} 
                    imageHeight={Dimensions.get('window').height - 130}
                    onClick={() => next_page(1)}
                >
                    <GalleryImage 
                        resizeMode={'stretch'} 
                        resizeMethod={'resize'}
                        style={{height: Dimensions.get('window').height - 130}}
                        source={{ uri: images[page] } || no_content}
                    />
                </ImageZoom>
                <DoujinMenu previous_page={previous_page} next_page={next_page} totalPages={totalPages} page={page} />
            </GalleryImageHolder>
        )
    }

    return(
        <GalleryContainer>
            <Nav route={route} navigation={navigation} />
            <GalleryContent>
                <ImageComponent />
            </GalleryContent>
        </GalleryContainer>
    );
}
