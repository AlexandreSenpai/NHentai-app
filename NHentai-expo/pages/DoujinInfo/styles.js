import styled from 'styled-components/native';

export const DoujinContainer = styled.View`
    background: #1D1D1D;
    flex: 1;
`;

export const InfoHolder = styled.View`
    padding: 10px;
`;

export const ScrollableContainer = styled.ScrollView``;

export const InfoContent = styled.View`
    background: #333333;
    padding: 10px;
    border-radius: 5px;
    flex-direction: row;
    min-height: 200px;
`;

export const LeftBox = styled.View`
    width: 50%;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image`
    width: 80%;
    height: 200px;
    border-radius: 3px;
`;

export const RightBox = styled.View`
    width: 50%;
`;

export const DoujinTitle = styled.Text`
    color: #9D9D9D;
    margin-bottom: 10px;
`;

export const TagHolder = styled.View`
    width: 100%;
`;

export const TagTitle = styled.Text`
    font-weight: bold;
    color: #9D9D9D;
`;

export const PreviewHolder = styled.View`
    padding: 10px;
`;

export const PreviewContent = styled.View`
    background: #333333;
    padding: 10px;
    border-radius: 5px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const TouchableImage = styled.TouchableHighlight`
    margin: 2%;
`;

export const ImagePreview = styled.Image`
    width: 100px;
    height: 150px;
    border-radius: 5px;
`;