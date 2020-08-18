import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';
import Nav from '../../components/Nav';
import api from '../../services/api';
import no_content from '../../assets/no-content.png';

import { 
    DoujinContainer, 
    InfoHolder, 
    InfoContent, 
    LeftBox, 
    RightBox, 
    Image, 
    DoujinTitle, 
    TagHolder, 
    TagTitle, 
    PreviewHolder, 
    PreviewContent, 
    ImagePreview,
    ScrollableContainer,
    TouchableImage,
    PreviewSkeleton
} from './styles';

function DoujinInfo({ route, navigation }) {

    const [ title, setTitle ] = useState('');
    const [ images, setImages ] = useState([]);
    const [ loaders, setLoaders ] = useState([]);
    const [ tags, setTags ] = useState({});
    const [ doujin, setDoujin ] = useState(route.params ? route.params.doujin : '')

    useEffect(() => {
        api.get(`/${doujin}`).then(res => {
            const data = res.data;
            setTitle(data.title);
            setImages(data.images);
            setTags({
                "artists": data.artists.join(','),
                "categories": data.categories.join(','),
                "languages": data.languages.join(','),
                "tags": data.tags.join(','),
                "pages": data.pages[0]
            })
            const list = data.images.map(item => true)
            setLoaders(list)
        });
    }, [ doujin ])

    const navigate_to = (index) => {
        const { navigate } = navigation;
        navigate('Gallery', { source_images: images, pages: parseInt(tags['pages']), index })
    }

    const handle_download_end = (index) => {
        const list = loaders
        list[index] = false
    }

    return(
        <DoujinContainer>
            <Nav route={route} navigation={navigation} setDoujin={setDoujin} />
            <ScrollableContainer>
                <InfoHolder>
                    <InfoContent>
                        <LeftBox>
                            <Image resizeMode={'cover'} resizeMethod={'resize'} source={images.length > 0 ? { uri: images[0] } : no_content} />
                        </LeftBox>
                        <RightBox>
                            <DoujinTitle numberOfLines={3}>
                                {title}
                            </DoujinTitle>
                            {
                                Object.keys(tags).length > 0
                                ? Object.keys(tags).map((key, index) => (
                                    <TagHolder key={`tag_${index}`}>
                                        <TagTitle>{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${tags[key]}`}</TagTitle>
                                    </TagHolder>
                                ))
                                : null
                            }
                        </RightBox>
                    </InfoContent>
                </InfoHolder>
                <PreviewHolder>
                    <PreviewContent>
                        {
                            images.length > 0
                            ? images.map((item, index) => (
                                <>
                                    <PreviewSkeleton>
                                        <SkeletonContent
                                            containerStyle={{position: 'absolute', visibility: loaders[index] === false ? 'hidden' : 'visible'}}
                                            key={`doujin_preview_${index}`}
                                            isLoading={loaders[index]}
                                            boneColor="#111"
                                            highlightColor="#1D1D1D"
                                            animationDirection="horizontalLeft"
                                            layout={[
                                                { 
                                                    key: `animated_${index}`, 
                                                    width: 100, 
                                                    height: 150
                                                }
                                            ]}
                                        />
                                        <TouchableImage key={`preview_${index}`} onPress={() => navigate_to(index)}>
                                            <ImagePreview 
                                                resizeMode={'cover'} 
                                                resizeMethod={'resize'} 
                                                source={{ uri: item }}
                                                onLoad={() => handle_download_end(index)}
                                            />
                                        </TouchableImage>
                                    </PreviewSkeleton>
                                </>
                            ))
                            : null
                        }
                    </PreviewContent>
                </PreviewHolder>
            </ScrollableContainer>
        </DoujinContainer>
    );
}

export default DoujinInfo;